import {Dot, MessageCircle, ThumbsUp} from "lucide-react";
import type {IMusic, IStats} from "../../_types/post.types";
import type {ICommentResponse} from "../../../../types/comments/comment.types";
import {getYearFromDate} from "../../../../helpers/format-date-helper";
import {CommentsSheet} from "../comment/comments-list";
import {Button} from "../../../../components/ui/button";

type PostFooterProps = {
	music: IMusic;
	stats: IStats;
	comments: ICommentResponse;
};

export const PostFooter = ({ music, stats, comments,}: PostFooterProps) => {

	return (
		<>
			<div>
				<div className="flex flex-row items-center justify-between pt-2.5 pr-1 pl-1">
					<div className="flex flex-row items-center">
						<p className="items-center pb-1 font-semibold text-2xl text-white">
							{music.artist}
						</p>
						<Dot className={"items-center"} color="white" size={30} />
						<p className="font-medium text-white">{music.title}</p>
					</div>

					<p className="text-muted-foreground text-lg">
						{getYearFromDate(music.release_date)}
					</p>
				</div>
				<div>
					<div className={"flex flex-row items-center gap-4 pt-3 pr-1 pb-5 pl-1"}>
						<div className={"h-14"}>
							<Button className={"flex flex-row items-center gap-2 cursor-pointer"}>
								<ThumbsUp size={20} />
								<p>
									{stats.likes}
								</p>
							</Button>
						</div>
						<div className={"h-14"}>
							<CommentsSheet music={music} comments={comments}>
								<Button className={"flex flex-row items-center gap-2 cursor-pointer"}>
									<MessageCircle size={20} />
									<p>
										{stats.comments}
									</p>
								</Button>
							</CommentsSheet>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
