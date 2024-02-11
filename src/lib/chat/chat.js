import { auth, db } from "@/lib/firebase/firebase";
import { serverTimestamp, addDoc } from "firebase/firestore";
import { collection } from "@/lib/firebase/firestore";

// TODO: Add user info
export async function sendChat(collection, message) {
  await addDoc(collection, {
    text: message,
    createdAt: serverTimestamp(),
  });
}
