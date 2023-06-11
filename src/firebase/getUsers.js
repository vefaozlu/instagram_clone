import { collection, getDocs } from "firebase/firestore/lite";

export const getUsers = async (db) => {
  const usersCol = collection(db, "test");
  const userSnapshot = await getDocs(usersCol);
  const userList = userSnapshot.docs.map((doc) => doc.data());

  console.log(userList);

  return userList;
};