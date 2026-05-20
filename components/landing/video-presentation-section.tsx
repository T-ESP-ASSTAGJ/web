"use client"

import {useRef} from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "motion/react";
import {PostMockup} from "@/components/landing/mockups/post-mockup";

export const VideoPresentationSection = () => {
    const r = useRef<HTMLDivElement>(null);
    const {scrollY} = useScroll();
    const prefersReduced = useReducedMotion();

    const y = useTransform(scrollY, (v) => (prefersReduced ? 0 : -v * 0.10));
    const invertedY = useTransform(scrollY, (v) => (prefersReduced ? 0 : v * 0.10));

    return (
        <motion.section
            id={"discover"}
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8}}
            className="relative z-20 w-full flex flex-col items-center h-[75dvh] lg:h-[85vh] px-5"
        >
            {/* Ambient glow background — large, diffuse, no hard edges */}
            <motion.div
                style={{y: invertedY, willChange: "transform"}}
                className="absolute inset-0 -top-[40%] pointer-events-none"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/[0.06] blur-[200px]"/>
                <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-pink-500/[0.04] blur-[180px]"/>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
                style={{y, willChange: "transform"}}
                className="absolute top-24 lg:top-36"
            >
                <div className="relative">
                    {/* Phone frame */}
                    <div className="w-[320px] lg:w-[360px] rounded-[44px] border-2 border-white/[0.12] bg-[#0C0C0C] p-3 shadow-2xl shadow-purple-500/10">
                        {/* Dynamic island */}
                        <div className="mx-auto mb-2 h-[28px] w-[100px] rounded-full bg-black"/>

                        {/* Screen content */}
                        <div className="rounded-[32px] overflow-hidden bg-[#0C0C0C]">
                            {/* Status bar */}
                            <div className="flex justify-between items-center px-6 py-2">
                                <span className="text-[11px] text-white/60 font-medium">9:41</span>
                                <div className="flex items-center gap-1">
                                    <div className="w-3.5 h-2 rounded-sm border border-white/50 flex items-end p-[1px]">
                                        <div className="w-full h-3/4 rounded-[1px] bg-white/60"/>
                                    </div>
                                </div>
                            </div>

                            {/* Header */}
                            <div className="flex items-center justify-between px-4 pb-2">
                                <h2 className="text-[15px] font-bold italic text-white">JAMLY.</h2>
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-white/40"/>
                                    <div className="w-1 h-1 rounded-full bg-white/40"/>
                                </div>
                            </div>

                            {/* Feed tabs */}
                            <div className="flex gap-4 px-4 pb-3">
                                <span className="text-xs font-semibold text-white border-b border-white pb-1">Friends</span>
                                <span className="text-xs text-white/40">Discovery</span>
                            </div>

                            {/* Post card */}
                            <PostMockup/>

                            {/* Bottom padding */}
                            <div className="h-4"/>
                        </div>
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-white/20"/>
                </div>
            </motion.div>
        </motion.section>
    )
}
