"use client"

import React, { useState } from "react";
import type { ICommentResponse } from "../../../../types/comments/comment.types";
import type { IMusic } from "../../_types/post.types";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Bookmark, CircleAlert, Heart, MessageSquarePlus, Play, Send } from "lucide-react";
import { getYearFromDate } from "../../../../helpers/format-date-helper";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Commentary from "./commentary";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface ICommentProps {
	music: IMusic;
	comments: ICommentResponse;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
}

export function CommentsSheet({music, comments, children, open, onOpenChange}: ICommentProps) {
	const [commentText, setCommentText] = useState("");
	const isDisabled = commentText.trim().length === 0;

	const handleSend = (e?: React.FormEvent) => {
		e?.preventDefault();
		const text = commentText.trim();
		if (!text) return;
		console.log("Commentaire envoyé:", text);
		setCommentText("");
	};

	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetTrigger asChild>{children}</SheetTrigger>

			<SheetContent side="right" className="w-full border-l bg-[#181818] text-white sm:max-w-md md:max-w-md lg:max-w-xl">
				<SheetHeader>
					<SheetTitle className="sr-only">Comments</SheetTitle>
					<div className="flex items-start justify-between gap-4 p-2">
						<div className="flex items-start gap-4">
							<Button size="icon" className="h-12 w-12 rounded-full bg-white text-black">
								<Play className="h-5 w-5" fill="currentColor" />
							</Button>
							<div className="flex min-w-0 flex-col">
								<div className="truncate text-xl font-extrabold text-white">{music.title}</div>
								<div className="truncate text-base font-medium text-white/90">{music.artist}</div>
							</div>
						</div>
						<div className="ml-4 text-lg font-medium text-white/90">
							{getYearFromDate(music.release_date ?? "-")}
						</div>
					</div>
				</SheetHeader>

				<div className="mx-auto my-3 flex items-center gap-10">
					<Button variant="ghost" size="icon" className="h-12 w-12 text-white/70 hover:text-white [&_svg]:size-8">
						<Heart />
					</Button>
					<Button variant="ghost" size="icon" className="h-12 w-12 text-white/70 hover:text-white [&_svg]:size-8">
						<MessageSquarePlus />
					</Button>
					<Button variant="ghost" size="icon" className="h-12 w-12 text-white/70 hover:text-white [&_svg]:size-8">
						<Bookmark />
					</Button>
					<Button variant="ghost" size="icon" className="h-12 w-12 text-white/70 hover:text-white [&_svg]:size-8">
						<CircleAlert />
					</Button>
				</div>

				<div className="mt-2 flex max-h-[90vh] flex-col gap-6 overflow-y-auto px-7 pr-1 w-full pb-1">
					{(comments?.comments ?? []).map((c) => (
						<Commentary key={c.id} comment={c} />
					))}
					{!comments?.comments?.length && (
						<div className="text-sm text-white/60">Any comments for the moment.</div>
					)}
				</div>

				<div className="sticky bottom-0 z-50 border-t border-white/10 bg-[#181818]/95 backdrop-blur px-4 py-3">
					<form className="flex items-center gap-3" onSubmit={handleSend}>
						<Avatar className="h-8 w-8">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>Avatar</AvatarFallback>
						</Avatar>
						<Input
							placeholder="Add a comment…"
							value={commentText}
							onChange={(e) => setCommentText(e.target.value)}
							className="flex-1 bg-white/5 text-white placeholder:text-white/50"
						/>
						<Button
							type="submit"
							className="shrink-0 cursor-pointer"
							disabled={isDisabled}
							aria-disabled={isDisabled}
						>
							<Send size={20} />
						</Button>
					</form>
				</div>

			</SheetContent>
		</Sheet>
	);
}
