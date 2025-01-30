import { useState, useEffect } from "react";

type UserProfileProps = {
  userId: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
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

  if (loading) return <p className="text-gray-500 text-center">Loading profile...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-4 sm:p-6 flex flex-col items-center bg-white shadow-md rounded-lg">
      <img
        src={user?.avatar}
        alt={`${user?.name}'s avatar`}
        className="w-24 h-24 rounded-full border-2 border-gray-300"
      />
      <h2 className="text-xl font-semibold mt-3">{user?.name}</h2>
      <p className="text-gray-600">{user?.email}</p>
    </div>
  );
};

export default UserProfile;
