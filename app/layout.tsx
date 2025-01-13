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

export const metadata: Metadata = {
  title: "Ecommerce Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          {/* Main content */}
          <main>
            <SignedIn>
              {/* Show the dashboard if signed in */}
              <DashboardWidget />
            </SignedIn>
            <SignedOut>
              {/* Render children (e.g., Sign In page) if not signed in */}
              {children}
            </SignedOut>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
