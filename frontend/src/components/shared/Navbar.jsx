import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover"; // Import Popover components from Radix UI
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"; // Import Avatar components
import { LogOutIcon, User2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const user = false;
  const { user } = useSelector(store => store.auth);

  return (
    <div className="bg-white absolute top-0 left-0 w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-16">
        {/* Logo Section */}
        <div className="ml-1">
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        {/* Navigation Links */}
        <div className="ml-auto flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/"><Button className="w-full py-4 text-white font-semibold bg-gradient-to-r from-[#843c6c] to-[#bd69d2] hover:from-[#9053a4] hover:to-[#71171d] hover:translate-y-[-4px] hover:shadow-xl rounded-lg transition duration-300">
                  Home
                </Button></Link></li>
            <li><Link to="/jobs"><Button className="w-full py-4 text-white font-semibold bg-gradient-to-r from-[#843c6c] to-[#bd69d2] hover:from-[#9053a4] hover:to-[#71171d] hover:translate-y-[-4px] hover:shadow-xl rounded-lg transition duration-300">
                  Jobs
                </Button></Link></li>
            <li><Link to="/browse"><Button className="w-full py-4 text-white font-semibold bg-gradient-to-r from-[#843c6c] to-[#bd69d2] hover:from-[#9053a4] hover:to-[#71171d] hover:translate-y-[-4px] hover:shadow-xl rounded-lg transition duration-300">
                  Browse
                </Button></Link></li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button className="w-full py-4 text-white font-semibold bg-gradient-to-r from-[#3b8181] to-[#82e0e0] hover:from-[#081010] hover:to-[#54d8d8] hover:translate-y-[-4px] hover:shadow-xl rounded-lg transition duration-300">
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button className="w-full py-4 text-white font-semibold bg-gradient-to-r from-[#3c845e] to-[#69d2a4] hover:from-[#69d2a4] hover:to-[#0d4025] hover:translate-y-[-4px] hover:shadow-xl rounded-lg transition duration-300">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-10 h-10 rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="bg-white shadow-lg p-4 rounded-md">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="w-10 h-10 rounded-full"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Markus MernStack</h4>
                    <p>Marky is a Good Mern Stacker</p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <button className="flex items-center gap-2 text-black-500 bg-transparent hover:underline focus:outline-none">
                      <User2 />
                      <span><Link to="/profile">View Profile</Link> </span>
                    </button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <button className="flex items-center gap-2 text-black-500 bg-transparent hover:underline focus:outline-none">
                      <LogOutIcon />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
