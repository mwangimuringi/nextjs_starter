import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import AuthUI from "../components/AuthUI";

const ClerkAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [isSignedIn]);

  if (loading) return <p>Loading authentication...</p>;

  return (
    <ClerkProvider>
      <AuthUI isSignedIn={isSignedIn}>{children}</AuthUI>
    </ClerkProvider>
  );
};

export default ClerkAuthProvider;
