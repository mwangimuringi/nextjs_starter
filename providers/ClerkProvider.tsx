import { ClerkProvider, useAuth, SignIn, SignOutButton } from "@clerk/nextjs";

const ClerkAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();

  return (
    <ClerkProvider>
      {isSignedIn ? (
        <>
          {children}
          <SignOutButton>Sign Out</SignOutButton>
        </>
      ) : (
        <SignIn />
      )}
    </ClerkProvider>
  );
};

export default ClerkAuthProvider;
