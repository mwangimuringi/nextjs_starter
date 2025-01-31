import { useEffect } from "react";

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

useEffect(() => {
  localStorage.setItem("user", JSON.stringify(user));
}, [user]);

const useAuth = () => {
  const [user, setUser] = useState<null | { id: string; name: string }>(null);

  const login = (id: string, name: string) => setUser({ id, name });

  const logout = () => setUser(null);

  return { user, login, logout };
};

export default useAuth;
