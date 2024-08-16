export interface User {
   name?: string;
   email?: string;
   image?: string;
}

export type createAccountFn = (
   data: { name: string; email: string; password: string },
   callbackFunction?: () => void
) => Promise<void>;

export type signInWithGoogleFn = (callbackFunction?: () => void) => Promise<void>;

export type signInWithEmailFn = (
   data: { email: string; password: string },
   callbackFunction?: () => void
) => Promise<void>;

export type signOutFn = () => Promise<void>;

export interface AuthContextType {
   user: User | null;
   isAuthenticating: boolean;
   createAccount: createAccountFn;
   signInWithGoogle: signInWithGoogleFn;
   signInWithEmail: signInWithEmailFn;
   signOut: signOutFn;
}
