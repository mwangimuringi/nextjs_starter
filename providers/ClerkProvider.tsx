import { ClerkProvider, useAuth, SignIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ClerkAuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { isSignedIn } = useAuth();
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [isSignedIn]);

    if (loading) return <p>Loading authentication...</p>;

    return (
        <ClerkProvider appearance={{ baseTheme: theme === "dark" ? "dark" : "light" }}>
            {isSignedIn ? (
                <div>
                    <UserButton />
                    {children}
                    <SignOutButton>Sign Out</SignOutButton>
                </div>
            ) : (
                <SignIn />
            )}
        </ClerkProvider>
    );
};

export default ClerkAuthProvider;
