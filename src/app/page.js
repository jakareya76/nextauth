"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
  const session = useSession();

  return <section></section>;
};
export default Home;
