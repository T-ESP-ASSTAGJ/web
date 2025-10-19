import {mock_posts} from "@/mock-data/post";
import {PostList} from "./_components/post/post-list";

export default function HomePage() {
	return (
		<div className="relative w-full h-[88dvh]">
            <PostList posts={mock_posts} />
		</div>
	);
};