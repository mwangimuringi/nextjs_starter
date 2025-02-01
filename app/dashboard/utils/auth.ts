import { post } from "./api";

const login = async (email: string, password: string) => {
  return post("/auth/login", { email, password });
};

export { login };
