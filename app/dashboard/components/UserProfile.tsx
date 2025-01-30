import { useState, useEffect } from "react";

type UserProfileProps = {
  userId: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

const UserProfile = ({ userId }: UserProfileProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [userId]);

  return <div>User Profile: {user?.name}</div>;
};

export default UserProfile;
