"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Navbar from "@/components/Navbar";
import { SignInButton, SignedOut, SignedIn, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const { user } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      user ? router.push(`/profile/${user.id}`) : null;
    }
  }, [user]);

  return (
    <main>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <Navbar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="w-full h-full flex justify-center items-center">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <div>loading</div>
            </SignedIn>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
