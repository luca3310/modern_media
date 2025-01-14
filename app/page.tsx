"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Navbar from "@/components/Navbar";
import { SignedIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import PostForm from "@/components/PostForm";

export default function Home() {
  const { user } = useUser();

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
        <ResizablePanel defaultSize={70}>
          <SignedIn>
            <PostForm user={user} />
          </SignedIn>
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
