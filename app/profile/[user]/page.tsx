"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { SignedIn, UserProfile } from "@clerk/nextjs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import PostForm from "@/components/PostForm";
import { motion, AnimatePresence } from "framer-motion";

export default function User({ params }: { params: { user: string } }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myPage, setMyPage] = useState<boolean>(false);
  const { user } = useUser();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (user && params) {
      if (user.id === params.user) {
        setMyPage(true);
        setIsLoading(false);
      } else {
        //get user
      }
    }
  }, [user, params]);
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

        {!isLoading && myPage ? (
          <ResizablePanel defaultSize={50}>
            <SignedIn>
              <ProfileSection
                setIsProfileModalOpen={setIsProfileModalOpen}
                user={user}
              />
              <PostForm user={user} />
            </SignedIn>
          </ResizablePanel>
        ) : null}
        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <AnimatePresence>
        {isProfileModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute w-full h-full bg-black top-0 left-0 flex justify-center items-center bg-opacity-25"
          >
            <div
              className="absolute w-full h-full"
              onClick={() => setIsProfileModalOpen(false)}
            ></div>
            <UserProfile routing="hash" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
