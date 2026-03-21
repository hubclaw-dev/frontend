"use client";

import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/app/store/authStore";

const googleProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export function signOut() {
  return firebaseSignOut(auth);
}

export function useAuth() {
  // const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const {user, setUser} = useAuthStore()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      // console.log(user)
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}