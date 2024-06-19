import { createContext, useContext } from "react";

export const UserContext = createContext(undefined);

export function useUserContext() {
  const user = useContext(UserContext);

  if (user === undefined) {
    throw new Error("useUserContext should be used");
  }
  return user;
}
