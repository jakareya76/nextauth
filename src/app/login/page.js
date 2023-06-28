"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (session.status === "authenticated") {
    router.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
  };

  return (
    <section>
      <div className="w-full h-screen container mx-auto flex flex-col gap-5 items-center justify-center">
        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <div className="flex items-center justify-center gap-5">
          <Link
            href="/register"
            className="text-center underline font-semibold"
          >
            Create An Account
          </Link>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => signIn("google")}
          >
            Login With Google
          </button>
        </div>
      </div>
    </section>
  );
};
export default Login;
