"use client";

import DummyWrapper from "../_components/dummyWrapper";
import AuthProvider from "../_providers/authProvider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
