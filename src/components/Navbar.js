"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  return (
    <header className="bg-zinc-800">
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        {session.status === "loading" && <h1>Loading...</h1>}
        {session.status === "authenticated" && (
          <Link href="/" className="text-xl">
            {session?.data?.user?.name}
          </Link>
        )}
        {session.status === "unauthenticated" && (
          <Link href="/" className="text-xl">
            Username
          </Link>
        )}

        {session.status === "unauthenticated" && (
          <Link href="/login" className="bg-blue-500 px-6 py-2 rounded">
            Login
          </Link>
        )}
        {session.status === "authenticated" && (
          <button
            className="bg-red-500 px-6 py-2 rounded"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
