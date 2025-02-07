"use client";

import Link from "next/link";
import React from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const Navbar = () => {
  const { isLoaded, isSignedIn, signOut } = useAuth();

  return (
    
  );
};

export default Navbar;