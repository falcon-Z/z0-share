"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "../_components/ui/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <header className=" sticky top-0 z-50 backdrop-blur bg-opacity-5">
        <Navbar />
      </header>
      <main className="grid place-items-center min-h-screen m-1 lg:p-4 ">
        {children}
      </main>
    </SessionProvider>
  );
}
