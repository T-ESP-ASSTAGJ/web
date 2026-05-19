import {Heart, MessageCircle, Music} from "lucide-react";
import type {LucideIcon} from "lucide-react";

interface Notification {
    icon: LucideIcon;
    title: string;
    message: string;
    gradient: string;
    align: "justify-start" | "justify-end";
}

const notifications: Notification[] = [
    {
        icon: Heart,
        title: "Lila liked your post",
        message: "Midnight Drive \u2014 Arctic Synthwave",
        gradient: "from-purple-500 to-pink-500",
        align: "justify-start",
    },
    {
        icon: MessageCircle,
        title: "Marc",
        message: "This track is fire",
        gradient: "from-blue-500 to-purple-500",
        align: "justify-end",
    },
    {
        icon: Music,
        title: "Sarah shared a track",
        message: "Echoes \u2014 Lila Monroe",
        gradient: "from-purple-500 to-blue-500",
        align: "justify-start",
    },
];

export const SocialMockup = () => (
    <div className="w-full max-w-[300px] mx-auto space-y-3">
        {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
                <div key={notif.title} className={`flex ${notif.align} w-full`}>
                    <div className="flex items-center gap-3 p-3 rounded-[18px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl w-[260px]">
                        <div className={`w-9 h-9 shrink-0 rounded-full bg-gradient-to-br ${notif.gradient} flex items-center justify-center`}>
                            <Icon size={14} className="text-white"/>
                        </div>
                        <div className="min-w-0">
                            <p className="text-[13px] font-semibold text-white truncate">{notif.title}</p>
                            <p className="text-[11px] text-white/55 truncate">{notif.message}</p>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
);
