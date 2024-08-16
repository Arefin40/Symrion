export interface User {
   name?: string;
   email?: string;
   image?: string;
}

export type createAccountFn = (
   data: { name: string; email: string; password: string },
   callbackFunction?: () => void
) => Promise<void>;

export type signOutFn = () => Promise<void>;

export interface AuthContextType {
   user: User | null;
   isAuthenticating: boolean;
   createAccount: createAccountFn;
   signOut: signOutFn;
}
