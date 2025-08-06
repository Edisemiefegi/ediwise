"use client";

import { onAuthStateChanged, auth, db, doc, getDoc } from "@/service/firebase";
import {  useDataStore } from "@/store/DataStore";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import  { useEffect } from "react";

export default function AuthObserver() {
  const router = useRouter();
  const setState = useDataStore(state => state.setState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setState({ user: userData as User, userid: uid });
      
        } else {
          console.log("User exists in auth but not in Firestore.");
        }
      } else {
         setState({ user: null, userid: null });
        router.push("/auth");
      }
    });

    return () => unsubscribe();
  }, [router, setState]);

  return null;
}
