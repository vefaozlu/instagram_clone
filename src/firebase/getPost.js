import { doc as document, getDoc } from "firebase/firestore";

export const getPost = async (db, id) => {
  try {
    const docRef = document(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const doc = docSnap.data();
    console.log(doc);
    return doc;
  } catch (e) {
    console.log(e);
  }
};
