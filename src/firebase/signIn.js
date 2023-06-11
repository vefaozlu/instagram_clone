import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (auth, email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
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
