import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/lib/firebase/firebase";

export function onAuthStateChanged(cb) {
	return _onAuthStateChanged(auth, cb);
}

export async function signUpWithEmail(email, password) {
  let result, error;
  console.log('asd')
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    console.log('yu');
  } catch (e) {
    error = e;
    console.log('asdasd')
  }
  return { result, error };
}

export async function login(email, password) {
  let result, error;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }
  return { result, error };
}

export async function logout() {
  try {
    signOut(auth)
  } catch {
    ('Failed to sign out');
  }
}


// export async function signInWithGoogle() {
//   const provider = new GoogleAuthProvider();

//   try {
//     await signInWithPopup(auth, provider);
//   } catch (error) {
//     console.error("Error signing in with Google", error);
//   }
// }

// export async function signOut() {
//   try {
//     return auth.signOut();
//   } catch (error) {
//     console.error("Error signing out with Google", error);
//   }
// }
