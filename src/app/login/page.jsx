import Link from "next/link";

const Login = () => {
  return (
    <section>
      <div className="w-full h-screen container mx-auto flex items-center justify-center">
        <form className="flex flex-col space-y-5">
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
          <button className="bg-blue-500 text-white p-2 rounded">Login</button>
          <Link
            href="/register"
            className="text-center underline font-semibold"
          >
            Create An Account
          </Link>
        </form>
      </div>
    </section>
  );
};
export default Login;
