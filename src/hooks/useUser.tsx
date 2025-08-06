"use client";
import { useDataStore } from "@/store/DataStore";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  signInWithEmailAndPassword,
  collection,
  getDocs,
  getDoc,
  updateDoc,
  query,
  orderBy,
} from "@/service/firebase";
import { User } from "@/types";

export default function useUser() {
  const { user, reset } = useDataStore();

  const register = async (userData: User): Promise<void> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const userid = userCredential.user.uid;
      userData.id = userid;
      await setDoc(doc(db, "users", userid), userData);
    } catch (error) {
      console.error("Error signing up user:", error);
      throw error;
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await auth.signOut();
      reset();
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  };

  // const addNotification = async (data: any) => {
  //   const notification = {
  //     id: "",
  //     message: data.message,
  //     userid: user?.id,
  //     type: data.type,
  //     title: data.title,
  //   };

  //   const docRef = doc(collection(db, "notifications"));
  //   console.log(docRef);
  //   notification.id = docRef.id;
  //   await setDoc(docRef, notification);
  //   console.log(notification, "notification");
  // };

  const addAccount = async (formData: any): Promise<void> => {
    const data = {
      acctName: formData.acctName,
      acctType: formData.acctType,
      bankName: formData.bankName,
      balance: formData.balance | 0,
      createdAt: Date.now(),
      hidden: false,
      id: "",
    };
    const accountRef = doc(collection(db, "users", user?.id, "accounts"));
    data.id = accountRef.id;
    await setDoc(accountRef, data);

    console.log("Account added successfully", data);
  };

  const getUserAccounts = async (): Promise<any[]> => {
    if (!user?.id) return [];
    const accountsRef = query(
      collection(db, "users", user.id, "accounts"),
      orderBy("createdAt", "desc")
    );
    const accountsSnapshot = await getDocs(accountsRef);

    return accountsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const addTransactions = async (formData: any): Promise<void> => {
    const data = {
      account: formData.account,
      acctType: formData.type,
      description: formData.description,
      amount: Number(formData.amount || 0),
      createdAt: Date.now(),
      category: formData.category,
      notes: formData.notes,
      id: "",
    };
    const transactionRef = doc(
      collection(db, "users", user?.id, "transactions")
    );
    data.id = transactionRef.id;
    await setDoc(transactionRef, data);
    const accounts = await getUserAccounts();
    const selectedAccount = accounts.find(
      (account) => account.acctName === data.account
    );

    if (!selectedAccount) {
      console.error("Account not found");
      return;
    }

    const accountId = selectedAccount.id;
    const accountRef = doc(db, "users", user?.id, "accounts", accountId);
    // Get current balance
    const accountSnap = await getDoc(accountRef);
    if (!accountSnap.exists()) {
      console.error("Account not found.");
      return;
    }

    console.log(accountSnap, "accountSnap");

    const currentBalance = accountSnap.data()?.balance || 0;
    console.log(currentBalance, "currentbal");

    // Decide whether to add or subtract
    const newBalance =
      data.acctType === "Expense"
        ? currentBalance - data.amount
        : currentBalance + data.amount;

    console.log(newBalance, "newbalance");

    // Update the account
    await updateDoc(accountRef, {
      balance: newBalance,
    });

    console.log("Transaction added and balance updated:", data);

    // console.log("transaction added successfully", data);
  };

  const getUserTransactions = async (): Promise<any[]> => {
    if (!user?.id) return [];
    const transactionsRef = query(
      collection(db, "users", user.id, "transactions"),
      orderBy("createdAt", "desc")
    );
    const transactionsSnapshot = await getDocs(transactionsRef);
    return transactionsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };
  return {
    user,
    login,
    logout,
    register,
    addAccount,
    getUserAccounts,
    addTransactions,
    getUserTransactions,
  };
}
