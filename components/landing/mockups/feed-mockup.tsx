import {Music, Play} from "lucide-react";

const tracks = [
    {title: "Echoes", artist: "Lila Monroe", gradient: "from-blue-500/70 to-cyan-400/70", opacity: 0.5},
    {title: "Slow Dancer", artist: "Owen Wave", gradient: "from-purple-500/70 to-blue-500/70", opacity: 0.78},
    {title: "Midnight Drive", artist: "Arctic Synthwave", gradient: "from-purple-600/80 to-pink-500/80", opacity: 1},
];

export const FeedMockup = () => (
    <div className="w-full max-w-[300px] mx-auto space-y-3">
        {tracks.map((track, i) => (
            <div
                key={track.title}
                className="flex items-center gap-3 p-3 rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl"
                style={{opacity: track.opacity}}
            >
                <div className={`w-[52px] h-[52px] shrink-0 rounded-xl bg-gradient-to-br ${track.gradient} flex items-center justify-center border border-white/10`}>
                    <Music size={18} className="text-white/60"/>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white truncate">{track.title}</p>
                    <p className="text-xs text-white/55 truncate">{track.artist}</p>
                </div>
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Play size={12} className="text-white ml-0.5" fill="currentColor"/>
                </div>
            </div>
        ))}
    </div>
);
