import { collection, getDocs } from "firebase/firestore";

export const getPosts = async (db) => {
  const postsCol = collection(db, "posts");
  const postsSnapshot = await getDocs(postsCol);
  const postsList = postsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(postsList);
  return postsList;
};
