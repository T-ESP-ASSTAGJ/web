"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Post from "./post";
import type { IPost } from "../../_types/post.types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PostListProps {
    posts: IPost[];
}

export const PostList = ({ posts }: PostListProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [index, setIndex] = useState(0);

    const clamp = (n: number) => Math.max(0, Math.min(posts.length - 1, n));

    const scrollToIndex = useCallback(
        (i: number) => {
            const el = containerRef.current;
            if (!el) return;
            const target = clamp(i);
            el.scrollTo({
                top: target * el.clientHeight,
                behavior: "smooth",
            });
            setIndex(target);
        },
        [posts.length]
    );

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const i = clamp(Math.round(el.scrollTop / el.clientHeight));
                setIndex(i);
            });
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            el.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(raf);
        };
    }, [posts.length]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (["ArrowDown", "PageDown", " "].includes(e.key)) {
                e.preventDefault();
                scrollToIndex(index + 1);
            } else if (["ArrowUp", "PageUp"].includes(e.key)) {
                e.preventDefault();
                scrollToIndex(index - 1);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [index, scrollToIndex]);

    return (
        <div className="relative">
            <div
                ref={containerRef}
                className="fixed inset-0 z-0 overflow-y-scroll overscroll-contain snap-y snap-mandatory scrollbar-hide"
            >
                {posts.map((p) => (
                    <div key={p.id} className="h-dvh snap-start flex">
                        <div className="mx-auto w-full max-w-2xl flex items-center justify-center px-4">
                            <Post post={p} />
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="fixed right-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3 pointer-events-none"
                aria-hidden="false"
            >
                <button
                    type="button"
                    onClick={() => scrollToIndex(index - 1)}
                    disabled={index === 0}
                    aria-label="See last post"
                    title="Previous Post"
                    className="pointer-events-auto h-12 w-12 rounded-full bg-white/80 dark:bg-neutral-800 border border-black/10 dark:border-white/10 backdrop-blur
                    shadow-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition active:scale-95 cursor-pointer hover:bg-neutral-700"
                >
                    <ChevronUp />
                </button>

                <button
                    type="button"
                    onClick={() => scrollToIndex(index + 1)}
                    disabled={index === posts.length - 1}
                    aria-label="See next post"
                    title="Next post"
                    className="pointer-events-auto h-12 w-12 rounded-full bg-white/80 dark:bg-neutral-800 border border-black/10
                    dark:border-white/10 backdrop-blur shadow-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition active:scale-95 cursor-pointer
                    hover:bg-neutral-700"
                >
                    <ChevronDown />
                </button>
            </div>
        </div>
    );
};
