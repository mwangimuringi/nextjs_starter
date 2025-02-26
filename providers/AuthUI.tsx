import { SignIn, SignOutButton, UserButton } from "@clerk/nextjs";

const AuthUI = ({ isSignedIn, children }: { isSignedIn: boolean; children: React.ReactNode }) => {
  return isSignedIn ? (
    <div>
      <UserButton />
      {children}
      <SignOutButton>Sign Out</SignOutButton>
    </div>
  ) : (
    <SignIn />
  );
};

export default AuthUI;
