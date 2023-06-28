"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (session.status === "authenticated") {
    router.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="w-full h-screen container mx-auto flex items-center justify-center">
        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 border outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border outline-none"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Register
          </button>
          <Link href="/login" className="text-center underline font-semibold">
            Login With An Existing Account
          </Link>
        </form>
      </div>
    </section>
  );
};
export default page;
