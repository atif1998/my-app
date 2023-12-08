import Link from "next/link";
import React from "react";
import { ModeToggle } from "./DarkModeToggle";

export const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-between my-10 item-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex gap-10">
          <ModeToggle />
        </div>
      </ul>
    </div>
  );
};
