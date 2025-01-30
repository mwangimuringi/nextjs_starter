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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError("Error loading user profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <div>User Profile: {user?.name}</div>;
};

export default UserProfile;
