import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid place-items-center h-screen w-full p-2">
      <div className="rounded-3xl border border-gray-700 p-4 max-w-md w-full m-1">
        <div className="flex flex-col items-center justify-center gap-8">
          {children}
        </div>
      </div>
    </main>
  );
}
