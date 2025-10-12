import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp } from "lucide-react";
import type { IComment } from "../../../../types/comments/comment.types";
import { timeAgo } from "../../../../helpers/format-date-helper";

interface CommentaryProps {
	comment: IComment;
}

export default function Commentary({ comment }: CommentaryProps) {
	return (
		<div className="flex w-full max-w-full items-start gap-4">
			<Avatar>
				<AvatarImage src={comment.author.profile_picture} />
				<AvatarFallback>
					<p>Avatar</p>
				</AvatarFallback>
			</Avatar>

			<div className="flex min-w-0 flex-1 flex-col gap-2">
				<p className="text-lg font-semibold text-white">
					{comment.author.username}
				</p>

				<div className="break-words text-white">{comment.content}</div>

				<div className="flex items-start justify-between">
					<div className="flex gap-2 items-start">
						<p
							className="font-extralight text-white"
							style={{ fontFamily: "Jakarta" }}
						>
							{timeAgo(comment.created_at)}
						</p>
						<button
							className="font-semibold text-white"
							style={{ fontFamily: "Jakarta" }}
							type="button"
						>
							Answer
						</button>
					</div>
					<div className={"mr-5"}>
						<button
							className="mt-1 cursor-pointer"
							aria-label="Like comment"
							type="button"
						>
							<ThumbsUp color="#8D8D8D" size={18} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
