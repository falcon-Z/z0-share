import Link from "next/link";
import AuthButton from "../auth/authButton";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between py-4 px-16">
        <Link href="/">Z0-Share </Link>
        <AuthButton />
      </div>
    </>
  );
}
