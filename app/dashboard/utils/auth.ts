import { post } from "./api";

const login = async (email: string, password: string) => {
  return post("/auth/login", { email, password });
};

const signup = async (name: string, email: string, password: string) => {
    return post("/auth/signup", { name, email, password });
  };

  const logout = async () => {
    return post("/auth/logout", {});
  };  
  
  const resetPassword = async (email: string) => {
    return post("/auth/reset-password", { email });
  };
  
export { login };
