import {PostFooter} from "./post-footer";
import {PostHeader} from "./post-header";
import {PostBody} from "./post-body";
import type {IPost} from "../../_types/post.types";
import {mock_comments} from "../../../../mock-data/comment";

type PostProps = {
	post: IPost;
};


export default function Post({ post }: PostProps) {

	return (
		<div className={"flex flex-col gap-2"}>
			<div>
				<PostHeader
					user_post={post.user_post}
					created_at={post.created_at}
					location={post.location}
				/>
				<PostBody music={post.music} photo={post.photo} />
			</div>
			<PostFooter music={post.music} stats={post.stats} comments={mock_comments} />
		</div>
	);
}
