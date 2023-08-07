"use client";

import { cookies } from "next/dist/client/components/headers";
import React, { useEffect, useState } from "react";
import { User } from "../_lib/types";
import { AuthContext } from "../_context/useAuth";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = cookies().get("token")?.value;
    const id = cookies().get("id")?.value;
    const name = cookies().get("name")?.value;
    const email = cookies().get("email")?.value;

    if (id && email && name) {
      setUser({
        _id: id,
        email,
        name,
      });
    }

    setToken(token ? token : null);
  }, []);

  return (
    <AuthContext.Provider value={{ token, user }}>
      {children}
    </AuthContext.Provider>
  );
}
