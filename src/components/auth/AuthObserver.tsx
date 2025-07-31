"use client";

import { onAuthStateChanged, auth, db, doc, getDoc } from "@/service/firebase";
import { useAuth } from "@/store/Auth";
import { useRouter } from "next/navigation";
import  { useEffect } from "react";

export default function AuthObserver() {
  const router = useRouter();
  const { setUser } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUser(userData as any, uid);
        } else {
          console.log("User exists in auth but not in Firestore.");
        }
      } else {
        setUser(null, null);
        router.push("/auth");
      }
    });

    return () => unsubscribe();
  }, [router, setUser]);

  return null;
}
