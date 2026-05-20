import {Heart, MessageCircle, Music, User} from "lucide-react";
import Image from "next/image";

interface PostMockupProps {
    /** Main shared image (square). Drop into /public/mockups/ */
    image?: string;
    /** Front-camera selfie thumbnail (square) */
    selfie?: string;
    /** Album cover (square) */
    cover?: string;
    /** User avatar (square) */
    avatar?: string;
    username?: string;
    trackTitle?: string;
    trackArtist?: string;
    likes?: number;
    comments?: number;
}

export const PostMockup = ({
    image,
    selfie,
    cover,
    avatar,
    username = "alex.music",
    trackTitle = "Midnight Drive",
    trackArtist = "Arctic Synthwave",
    likes = 24,
    comments = 8,
}: PostMockupProps = {}) => (
    <div className="w-full max-w-[300px] mx-auto">
        <div className="rounded-[28px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl overflow-hidden">
            {/* User header */}
            <div className="flex items-center gap-3 px-4 py-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                    {avatar ? (
                        <Image src={avatar} alt={username} fill className="object-cover"/>
                    ) : (
                        <User size={14} className="text-white"/>
                    )}
                </div>
                <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-white truncate">{username}</p>
                    <p className="text-[11px] text-white/50">just shared</p>
                </div>
                <div className="ml-auto shrink-0">
                    <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                        <Music size={11} className="text-white/70"/>
                    </div>
                </div>
            </div>

            {/* Main image area */}
            <div className="relative mx-3 h-[250px] rounded-2xl overflow-hidden">
                {image ? (
                    <Image src={image} alt="Shared moment" fill className="object-cover" sizes="300px"/>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Music size={44} className="text-white/20"/>
                    </div>
                )}

                {/* Playing badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-full border border-white/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                    <span className="text-[10px] font-medium text-white">Playing</span>
                </div>

                {/* Small selfie thumbnail */}
                <div className="absolute top-3 right-3 w-[52px] h-[52px] rounded-lg border border-white/30 overflow-hidden flex items-center justify-center">
                    {selfie ? (
                        <Image src={selfie} alt="Selfie" fill className="object-cover" sizes="52px"/>
                    ) : (
                        <User size={18} className="text-white/40"/>
                    )}
                </div>
            </div>

            {/* Track info */}
            <div className="mx-3 mt-3 mb-1 flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500/80 to-purple-600/80 flex items-center justify-center shrink-0">
                    {cover ? (
                        <Image src={cover} alt={trackTitle} fill className="object-cover" sizes="36px"/>
                    ) : (
                        <Music size={12} className="text-white/80"/>
                    )}
                </div>
                <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-white truncate">{trackTitle}</p>
                    <p className="text-[11px] text-white/50 truncate">{trackArtist}</p>
                </div>
                <div className="ml-auto shrink-0 w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center">
                    {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white/60">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83"/>
                    </svg>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 px-5 py-3">
                <div className="flex items-center gap-1.5">
                    <Heart size={16} className="text-red-400" fill="currentColor"/>
                    <span className="text-xs text-white/70">{likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <MessageCircle size={16} className="text-white/60"/>
                    <span className="text-xs text-white/70">{comments}</span>
                </div>
            </div>
        </div>
    </div>
);
