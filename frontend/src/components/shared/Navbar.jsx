import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover"; // Import Popover components from Radix UI
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"; // Import Avatar components
import { LogOutIcon, User2 } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white absolute top-0 left-0 w-full">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-16">
        {/* Logo Section */}
        <div className="ml-4">
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        {/* Navigation Links */}
        <div className="ml-auto flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {/* Popover Component */}
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
              <div>
                <button className="text-black-500 bg-transparent hover:underline focus:outline-none">
                  <User2/>
                  View Profile
                </button>
                <button className="text-black-500 bg-transparent hover:underline focus:outline-none">
                <LogOutIcon/>
                  Logout</button>

              </div>
            </PopoverContent>
          </Popover>  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
