import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <nav className="mb-1 p-2">
      <div className="flex justify-between text-1xl">

        <div className="flex gap-4">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/camp">camp</Link>
          <Link href="/info">info</Link>
        </div>

        <div className="flex gap-4">
          <Link href="/login">login</Link>
          <Link href="/register">register</Link>
        </div>
      </div>
    </nav>
    <hr className="mb-4"/>
    </>
  );
};

export default Navbar;
