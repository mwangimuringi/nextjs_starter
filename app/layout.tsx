"use client"; // Add this here to mark the rest as client-side

import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import DashboardWidget from "./dashboard/components/DashboardWidget";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full bg-gray-100">
        <body className={`${inter.className} h-full`}>
          <header className="flex flex-wrap items-center justify-between p-4 bg-white shadow-md">
            <h1 className="text-lg font-semibold text-gray-700">
              Commerce Hub
            </h1>
            <div className="flex gap-2">
              <SignedOut>
                <SignInButton>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-4 py-2 bg-gray-300 text-black rounded-md shadow-md hover:bg-gray-400">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>

          <main className="p-6">
            <RootContent />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

const RootContent = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard"); // Redirects signed-in users to the dashboard
    }
  }, [isSignedIn, router]);

  return (
    <>
      <SignedIn>
        <DashboardWidget />
      </SignedIn>
      <SignedOut>
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-gray-700">
            Please sign in to access the dashboard
          </h2>
        </div>
      </SignedOut>
    </>
  );
};
