export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen h-full w-full p-2 grid place-items-center gap-8">
      {children}
    </main>
  );
}
