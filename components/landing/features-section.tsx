"use client"

import {Aperture, type LucideIcon, Music, Shell, Link} from "lucide-react";
import {Feature} from "@/components/landing/features/feature";
import {useRef, type ReactNode} from "react";

export interface FeatureBullet {
    label: string;
}
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {PostMockup} from "@/components/landing/mockups/post-mockup";
import {CaptureMockup} from "@/components/landing/mockups/capture-mockup";
import {FeedMockup} from "@/components/landing/mockups/feed-mockup";
import {SocialMockup} from "@/components/landing/mockups/social-mockup";

gsap.registerPlugin(ScrollTrigger);

export interface FeatureProps {
    icon: LucideIcon;
    caption: string;
    title: string;
    subtitle?: string
    description: string;
    mockup: ReactNode;
    className?: string;
    index?: number;
    bullets?: string[];
    accentColor?: string;
}

export const FeaturesSection = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        gsap.utils.toArray<HTMLElement>(".feature-card").forEach((card) => {
            gsap.from(card, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    end: "top 20%",
                    toggleActions: "play none none none",
                }
            })
        })
    }, {scope: containerRef})

    return (
        <section id={"features"} ref={containerRef} className={"flex flex-col gap-y-20 mt-20 lg:mt-72"}>
            <Feature
                index={1}
                accentColor={"from-fuchsia-500/20 to-purple-600/10"}
                className={"feature-card"}
                icon={Music}
                caption={"SHARE"}
                title={"Your Music, Their Feed"}
                subtitle={"Share what you're listening to with a single tap."}
                description={"Your song becomes a post, your playlist becomes a conversation. One track can spark a thousand reactions."}
                bullets={["One-tap share", "Auto cover art", "Spotify & Apple Music"]}
                mockup={<PostMockup/>}
            />
            <Feature
                index={2}
                accentColor={"from-pink-500/20 to-rose-600/10"}
                className={"feature-card lg:flex-row-reverse"}
                icon={Aperture}
                caption={"CAPTURE"}
                title={"Two Lenses, One Moment"}
                subtitle={"Snap your vibe from both cameras."}
                description={"Show the world what you see and how you look while the music plays. Real moments, real sounds."}
                bullets={["Dual camera", "0.3s capture", "Live soundtrack"]}
                mockup={<CaptureMockup/>}
            />
            <Feature
                index={3}
                accentColor={"from-violet-500/20 to-indigo-600/10"}
                className={"feature-card"}
                icon={Shell}
                caption={"SCROLL"}
                title={"A Feed That Sounds Like You"}
                subtitle={"No more silent scrolling."}
                description={"Every post plays, every story has a soundtrack. Your feed finally has a voice \u2014 and it sounds exactly like your friends."}
                bullets={["Audio-first feed", "Smart mute", "Endless discovery"]}
                mockup={<FeedMockup/>}
            />
            <Feature
                index={4}
                accentColor={"from-fuchsia-500/20 to-pink-600/10"}
                className={"feature-card lg:flex-row-reverse"}
                icon={Link}
                caption={"CONNECT"}
                title={"Find Your Sound Twin"}
                subtitle={"Match with people who feel the same songs."}
                description={"Same artist, same lyrics, same goosebumps \u2014 that's where real friendships start. Music is the shortcut."}
                bullets={["Taste matching", "Nearby listeners", "Sound twin score"]}
                mockup={<SocialMockup/>}
            />
        </section>
    )
}
