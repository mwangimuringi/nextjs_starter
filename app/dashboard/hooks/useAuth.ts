import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<null | { id: string; name: string }>(null);

  return { user };
};

export default useAuth;
