import type { IUserPost } from "../../_types/post.types";
import { formatDate } from "../../../../helpers/format-date-helper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PostHeaderProps = {
	user_post: IUserPost;
	created_at: string;
	location: string;
};

export const PostHeader = ({ user_post, created_at, location }: PostHeaderProps) => {
	return (
		<div className="flex items-center gap-3 px-1 py-5">

			<div className="flex items-center gap-2 min-w-0 cursor-pointer">
				<Avatar className="h-14 w-14 shrink-0">
					<AvatarImage src={user_post.profile_picture} className="h-14 w-14" />
					<AvatarFallback>
						{(user_post.username ?? "-").slice(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>

				<div className="flex min-w-0 flex-col leading-tight">
					<div className="truncate text-lg font-semibold text-white">
						{user_post.username}
					</div>
					<p className="truncate text-sm text-muted-foreground">{location}</p>
				</div>
			</div>

			<div className="ml-auto">
				<p className="text-sm text-muted-foreground">{formatDate(created_at)}</p>
			</div>
		</div>
	);
}
