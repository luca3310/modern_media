import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ProfileSectionProps {
  user: any;
  setIsProfileModalOpen: (isProfileModalOpen: boolean) => void;
}

export default function ProfileSection({
  setIsProfileModalOpen,
  user,
}: ProfileSectionProps) {
  return (
    <section className="flex flex-col">
      <div className="w-full bg-slate-600 aspect-[4/1]"></div>
      <div className="flex px-20 translate-y-[-50%] items-end gap-2 w-full">
        <Avatar className="rounded-full w-[12rem] h-[12rem] overflow-hidden">
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex justify-between p-4 w-[70%]">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold ">{user?.username}</h2>
            <p className="text-2xl text-slate-600 ">#{user?.username}</p>
          </div>
          <Button onClick={() => setIsProfileModalOpen(true)}>
            Manage account
          </Button>
        </div>
      </div>
      <div className="px-20">
        <Separator />
      </div>
    </section>
  );
}
