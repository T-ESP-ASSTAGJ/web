"use client";

import React from "react";
import { motion } from "framer-motion";
import type {IMusic} from "../../_types/post.types";

type PostBodyProps = {
	music: IMusic;
	photo: string;
};

export const PostBody = ({ music, photo }: PostBodyProps) => {
	const [showPhoto, setShowPhoto] = React.useState(false);

	const toggle = () => setShowPhoto((s) => !s);

	return (
		<div className="relative mx-auto flex h-[640px] w-[640px] select-none items-center justify-center">
			<div
				className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 shadow-sm"
				style={{ borderWidth: 3, borderColor: "rgba(50,50,50,0.4)" }}
			>
				<motion.img
					key="cover"
					src={music.music_cover}
					alt={music.title ? `${music.title} — cover` : "Music cover"}
					className="absolute inset-0 h-full w-full object-cover"
					animate={{ opacity: showPhoto ? 0 : 1 }}
					transition={{ duration: 0.3 }}
					draggable={false}
				/>
				<motion.img
					key="photo"
					src={photo}
					alt="Photo"
					className="absolute inset-0 h-full w-full object-cover"
					animate={{ opacity: showPhoto ? 1 : 0 }}
					transition={{ duration: 0.3 }}
					draggable={false}
				/>
			</div>
			<button
				type="button"
				onClick={toggle}
				aria-pressed={showPhoto}
				className="absolute right-3 top-3 h-28 w-28 overflow-hidden rounded-[28px] focus:outline-none focus:ring-2 focus:ring-white/60"
				style={{ borderWidth: 3, borderColor: "rgba(255,255,255,0.9)", borderStyle: "solid" }}
			>
				<motion.img
					src={showPhoto ? music.music_cover : photo}
					alt={showPhoto ? "Cover thumb" : "Photo thumb"}
					className="absolute inset-0 h-full w-full object-cover cursor-pointer"
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					draggable={false}
				/>
			</button>
		</div>
	);
}
