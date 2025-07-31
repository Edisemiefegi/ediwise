import { create } from "zustand";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  signInWithEmailAndPassword,
} from "@/service/firebase";
import { persist } from "zustand/middleware";

type User = {
  email: string;
  name: string;
  password: string;
  id: any;
  profile: string;
  createdAt: string;
  monthlyIncome: number;
  monthlyExpense: number;
  hideBalance: boolean;
  totalAssets: number;
  totalLiabilities: number;
};

type AuthState = {
  user: User | null;
  userid: string | null;
  setUser: (user: User | null, userid: string | null) => void;
  signupUser: (userData: User) => Promise<void>;
  signinUser: (email: string, password: string) => Promise<void>;
};

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      userid: null,
      setUser: (user, userid) => set({ user, userid }),
      signupUser: async (userData: User) => {
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
      },
      signinUser: async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
          throw error;
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
