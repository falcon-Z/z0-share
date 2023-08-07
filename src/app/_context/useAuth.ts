import { User } from "../_lib/types";
import { createContext, useContext } from "react";

type AuthContextType = {
  user: User | null;
  token: string | null;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
});

export default function useAuth() {
  return useContext(AuthContext);
}
