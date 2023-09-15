import { User } from "./User";

export type AuthContextType = {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email:string, password: string, name:string) => Promise<void>
    signOut: () => void;
    updateUser: (id:number, description: string) => Promise<void>
    createInitiative: (name:string, description:string, images:string | null, socials:string | null) => Promise<void>
    getUser: (id:number) => Promise<void>
    isAuthenticated: boolean;
  };
