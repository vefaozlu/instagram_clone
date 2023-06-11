import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const createUser = async (auth, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(errorCode, errorMessage);
    });
};
