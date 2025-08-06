import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types";


type AuthState = {
  user: User | null;
  userid: string | null;
};

type AuthActions = {
 reset: () => void;
 setState: (state: Partial<AuthState>) => void;
};

const initialState: AuthState = {
  user: null,
  userid: null,
}

 type AuthStore = AuthState & AuthActions;

// Create the Auth store using Zustand with persistence
export const useDataStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,
      reset: () => set({...initialState }),
      setState: (state) => set((prev) => ({ ...prev, ...state })),
    }),
    {
      name: "auth-storage",
    }
  )
);
