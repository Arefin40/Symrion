import * as React from "react";
import toast from "react-hot-toast";
import { User, AuthContextType, createAccountFn, signOutFn } from "@/types";
import { createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { auth } from "@/firebase";

// AuthContext
const AuthContext = React.createContext<AuthContextType | null>(null);

// Hook to use AuthContext
export const useAuth = () => {
   return React.useContext(AuthContext) as AuthContextType;
};

/** Formats Firebase error messages into a more user-friendly format. */
const formattedErrorMessage = (errorMessage: string) => {
   const regEx = /auth\/([a-z-]+)/;
   const message = errorMessage.match(regEx)?.[1];
   return message
      ? message.charAt(0).toUpperCase() + message.slice(1).split("-").join(" ")
      : errorMessage;
};

export const AuthProvider: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   const [user, setUser] = React.useState<User | null>(null);
   const [isAuthenticating, setIsAuthenticating] = React.useState(true);

   /** Set user info into state. */
   const setUnserInfo = (userData: any) => {
      const userInfo: User | null = userData
         ? {
              name: userData.displayName || undefined,
              email: userData.email || undefined,
              image: userData.photoURL || undefined,
           }
         : null;
      setUser(userInfo);
   };

   /**
    * Creates a new user account with the provided `name`, `email`, and `password`.
    * Also updates the user profile with the display name.
    *
    * @param data - Object containing name, email, and password.
    * @param callbackFunction - Optional callback function to be executed after account creation.
    */
   const createAccount: createAccountFn = async ({ name, email, password }, callbackFunction) => {
      setIsAuthenticating(true);
      try {
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         await updateProfile(userCredential.user, { displayName: name });
         if (callbackFunction) callbackFunction();
         toast.success("Account created successfully");
         setUnserInfo({ ...userCredential.user, name });
      } catch (error: any) {
         setIsAuthenticating(false);
         toast.error(formattedErrorMessage(error.code));
      }
   };

   /** Logs the user out. */
   const logOut: signOutFn = async () => {
      setIsAuthenticating(true);
      try {
         await signOut(auth);
      } catch (error) {
         setIsAuthenticating(false);
      }
   };

   React.useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
         setUnserInfo(currentUser);
         setIsAuthenticating(false);
      });
      return unsubscribe;
   }, []);

   const values = {
      user,
      isAuthenticating,
      createAccount,
      signOut: logOut,
   };

   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
