"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Home = () => {
  const session = useSession();

  console.log(session);
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl font-bold">Username</h2>
        <h2 className="text-xl font-semibold">Email</h2>
        <button className="bg-blue-500 text-white px-5 py-2 rounded my-4">
          Logout
        </button>
        <Link
          href="/login"
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          Login
        </Link>
      </div>
    </section>
  );
};
export default Home;
