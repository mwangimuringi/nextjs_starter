import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState<null | { id: string; name: string }>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (id: string, name: string) => setUser({ id, name });

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = () => !!user;

  return { user, login, logout, isAuthenticated };
};

export default useAuth;
