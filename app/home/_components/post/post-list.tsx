"use client"

import Post from "./post";
import type {IPost} from "../../_types/post.types";
import type {ICommentResponse} from "../../../../types/comments/comment.types";
import {useCallback, useState} from "react";

interface PostListProps {
    posts: IPost[];
}

export const PostList = ({ posts } : PostListProps) => {
    // const [refreshing, setRefreshing] = useState(false);
    //
    // const onRefresh = useCallback(() => {
    //     setRefreshing(true);
    //     console.log("🔄 refresh feed…");
    //     setTimeout(() => {
    //         setRefreshing(false);
    //         console.log("✅ refresh terminé");
    //     }, 1000);
    // }, []);


    return (
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
            {posts.map((p) => (
                <Post key={p.id} post={p} />
            ))}
        </div>
    )
}