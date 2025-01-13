import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import DashboardWidget from "./dashboard/components/DashboardWidget";

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
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            <div>
              <SignedOut>
                <SignInButton className="text-blue-500 hover:underline" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>

          <main className="p-6">
            <SignedIn>
              <DashboardWidget />
            </SignedIn>
            <SignedOut>
              <div className="text-center mt-10">
                <h2 className="text-2xl font-bold text-gray-700">
                  Please sign in to access the dashboard
                </h2>
              </div>
              {children}
            </SignedOut>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
