import { cookies } from "next/dist/client/components/headers";

export default function useToken() {
  const isServer = typeof window === "undefined";

  let token: string | null = null;

  if (!isServer) {
    token = localStorage.getItem("token");
  } else {
    const tokenCookie = cookies().get("token");
    if (tokenCookie) {
      token = tokenCookie?.value;
    }
  }

  const setToken = (token: string | null) => {
    if (!isServer && token) {
      localStorage.setItem("token", token);
    }
  };

  return { token, setToken };
}
