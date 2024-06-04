"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { useState } from "react";
import React from "react";

interface PostFormProps {
  user: any;
}

export default function PostForm({ user }: PostFormProps) {
  const [input, setInput] = useState<string>("");
  const [formats, setFormats] = useState<string[]>([]);

  function handleInputChange(e: React.FormEvent<HTMLTextAreaElement>) {
    const value = applyFormatting(e.currentTarget.value);
    setInput(value);
  }

  function handleToggleChange(value: string[]) {
    setFormats(value);
  }

  function applyFormatting(text: string): string {
    let formattedText = text;
    if (formats.includes("bold")) {
      formattedText = `<b>${formattedText}</b>`;
    }
    return formattedText;
  }

  return (
    <section className="p-10 px-20 flex flex-col gap-3">
      <div className="flex gap-2">
        <Link href={`/profile/${user?.id}`}>
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        <Textarea
          value={input}
          onChange={(e) => handleInputChange(e)}
          className="h-[10rem]"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="flex justify-between">
        <ToggleGroup
          type="multiple"
          onValueChange={(value) => handleToggleChange(value)}
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <FontBoldIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <FontItalicIcon className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <UnderlineIcon className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <Button>Post</Button>
      </div>
      <Separator />
    </section>
  );
}
