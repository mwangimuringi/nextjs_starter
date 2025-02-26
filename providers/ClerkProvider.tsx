import { ClerkProvider } from "@clerk/nextjs";

const ClerkAuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default ClerkAuthProvider;
