import Link from "next/link";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import {
  getKindeServerSession,
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBag } from "lucide-react";
import UserDropdowMenu from "./UserDropdowMenu";
import { Button } from "../ui/button";

type Props = {};

const Navbar: React.FC<Props> = async ({}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-3xl ">
            Store<span className="text-primary">Name</span>
          </h1>
        </Link>
        <NavbarLinks />
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <Link href={"/bag"} className="group p-2 flex items-center mr-2">
              <ShoppingBag className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                8
              </span>
            </Link>
            <UserDropdowMenu
              email={user.email ?? ""}
              name={user.username ?? ""}
              avatar={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          </>
        ) : (
          <>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
              <Button asChild variant={"ghost"}>
                <LoginLink>Sign in</LoginLink>
              </Button>
              <span className="h-6 w-px bg-gray-200"></span>
              <Button asChild variant={"ghost"}>
                <RegisterLink>Create Account</RegisterLink>
              </Button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
