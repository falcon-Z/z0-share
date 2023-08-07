export default async function DummyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
