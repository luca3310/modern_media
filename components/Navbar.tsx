"use client";

import Link from "next/link";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="flex flex-col h-[100vh] justify-between items-end p-6 pr-12">
      <ul className="flex flex-col gap-3 text-xl">
        <li className="hover:text-blue-500 transition duration-500">
          <Link href="/" className="flex gap-1 items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            <p>Home</p>
          </Link>
        </li>
        <SignedOut>
          <li className="hover:text-blue-500 transition duration-500">
            <Link href="/profile" className="flex gap-1 items-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <p>Profile</p>
            </Link>
          </li>
        </SignedOut>
        <SignedIn>
          <li className="hover:text-blue-500 transition duration-500">
            <Link
              href={user ? `/profile/${user.id}` : "/profile"}
              className="flex gap-1 items-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <p>Profile</p>
            </Link>
          </li>
        </SignedIn>
      </ul>
      <SignedIn>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex gap-4 rounded hover:bg-gray-100 p-2 px-5 transition duration-500">
              <Avatar>
                <AvatarImage src={user?.imageUrl} alt="cn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold">{user?.username}</h3>
                <p className="text-sm">#{user?.username}</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <SignOutButton>
                <DropdownMenuItem className="hover:cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </SignOutButton>
              <DropdownMenuSeparator />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedIn>
    </nav>
  );
}
