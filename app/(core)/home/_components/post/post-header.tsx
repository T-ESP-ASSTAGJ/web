import type { IUserPost } from "../../_types/post.types";
import { formatDate } from "../../../../../helpers/format-date-helper";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../../components/ui/shadcn/avatar";

type PostHeaderProps = {
	user_post: IUserPost;
	created_at: string;
	location: string;
};

export const PostHeader = ({ user_post, created_at, location }: PostHeaderProps) => {
	return (
		<div className="flex items-start gap-3 px-1 py-5">
			<div className="flex items-start gap-x-2 min-w-0 cursor-pointer">
				<Avatar className="size-14 shrink-0">
					<AvatarImage src={user_post.profile_picture} className="size-14 object-cover" />
					<AvatarFallback>
						{(user_post.username ?? "-").slice(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>

				<div className="flex flex-col justify-start min-w-0 pb-2">
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
