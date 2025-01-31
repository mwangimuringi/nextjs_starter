import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<null | { id: string; name: string }>(null);

  const login = (id: string, name: string) => setUser({ id, name });

  const logout = () => setUser(null);

  return { user, login, logout };
};

export default useAuth;
