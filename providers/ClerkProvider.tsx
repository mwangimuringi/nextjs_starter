import { ClerkProvider, useAuth } from "@clerk/nextjs";

const ClerkAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();

  return (
    <ClerkProvider>
      {isSignedIn ? children : <p>Please sign in to continue</p>}
    </ClerkProvider>
  );
};

export default ClerkAuthProvider;
