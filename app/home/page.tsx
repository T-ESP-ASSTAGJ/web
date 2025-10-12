import {mock_posts} from "../../mock-data/post";
import {PostList} from "./_components/post/post-list";


export default function HomePage () {
	return (
		<div className="mx-auto w-full max-w-5xl">
			<main className="px-4 pb-24 pt-4">

				<PostList posts={mock_posts} />
			</main>
		</div>

	);
};