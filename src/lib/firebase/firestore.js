import { auth, db } from "@/lib/firebase/firebase";
import { 
  collection as _collection,
  query as _query,
  orderBy,
  limit,
} from "firebase/firestore";


export function collection(collectionId) {
  return _collection(db, collectionId);
}

export function query(collection, ...constraints) {
  return _query(collection, ...constraints);
}

export function getGlobalMessages(numMessages) {
  return query(collection('global-messages'), orderBy("createdAt"), limit(numMessages));
}
