import { useState } from "react";
import Image from './IKImage';
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from "@clerk/clerk-react";


const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-full pt-5 h-16 md:h-20 flex item-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex item-center gap-4 text-2xl font-bold">
          <Image src="logo.png" alt="logo" w={62} h={52} />
          <span>Indian Heritage Hub</span>
        </Link>
        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Mobile Button */}
          <div
            className="cursor-pointer text-4xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "X" : "☰"}
          </div>
          {/* Mobile Linked List */}
          <div
            className={`w-full h-screen flex flex-col gap-8 font-medium text-lg items-center justify-center absolute top-16 transition-all ease-in-out 
                ${open ? "-right-0" : "-right-[100%]"}`}
          >
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
              <Link to="/login">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                  Login
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex item-center gap-8 xl:gap-12 font-medium">
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    );
}

export default NavBar;