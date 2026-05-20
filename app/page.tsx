import {ParticlesBackground} from "@/components/particles-backgroud";
import {Navbar} from "@/components/navbar";
import MainButton from "@/components/ui/main-button";
import {FooterBlurGradient} from "@/components/footer-blur-gradient";
import {FeaturesSection} from "@/components/landing/features-section";
import {FooterSection} from "@/components/landing/footer-section";
import {WordRotate} from "@/components/ui/magic-ui/word-rotate";
import Image from "next/image";
import {LucidePlay, QrCode} from "lucide-react";

export default function HomePage() {
    return (
        <div id={"#header"} className="bg-background">
            <Navbar/>

            <ParticlesBackground />

            <main className="flex w-full flex-col items-center justify-between sm:items-start">
                <div className={"relative w-full h-auto"}>
                    {/* Aurora + grid — desktop only (perf) */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block motion-reduce:hidden">
                        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full bg-purple-600/[0.10] blur-[120px] animate-aurora"/>
                        <div className="absolute top-[15%] right-[15%] w-[600px] h-[600px] rounded-full bg-fuchsia-500/[0.08] blur-[100px] animate-aurora [animation-duration:30s]"/>
                        <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] rounded-full bg-pink-500/[0.07] blur-[100px] animate-aurora [animation-duration:26s] [animation-direction:reverse]"/>
                        <div
                            className="absolute inset-0 opacity-[0.04]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
                                backgroundSize: "56px 56px",
                                maskImage:
                                    "radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%)",
                            }}
                        />
                    </div>
                    {/* Mobile: static lightweight glow */}
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden md:hidden">
                        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[380px] h-[380px] rounded-full bg-purple-600/[0.18] blur-[70px]"/>
                        <div className="absolute top-[35%] -right-[15%] w-[280px] h-[280px] rounded-full bg-fuchsia-500/[0.15] blur-[70px]"/>
                    </div>

                    <div className={"relative z-10"}>
                        <section className="w-full flex flex-col items-center mx-auto min-h-[80dvh] pt-44">
                            <div className="max-w-5xl flex flex-col items-center space-y-10 px-4">
                                <div className="flex flex-col items-center gap-y-6 text-center">
                                    {/* Eyebrow badge */}
                                    <div className="inline-flex items-center gap-x-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75 animate-ping"/>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500"/>
                                        </span>
                                        <span className="text-xs lg:text-sm text-white/80 tracking-wide">Early access · School Project</span>
                                    </div>

                                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-display font-medium tracking-tighter leading-[1.1]">
                                        Where Music Meets
                                        <div className={"flex flex-wrap justify-center items-center gap-x-3 duration-300"}>
                                            <span className="text-white/90">Real</span>
                                            <WordRotate
                                                className="text-gradient-brand"
                                                words={['Moments', 'People', 'Stories', 'Friends']}
                                            />
                                        </div>
                                    </h1>
                                    <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl px-2">
                                        Snap, share, and soundtrack your life. See what&apos;s playing in your friends&apos; world, right now.
                                    </p>
                                </div>

                                <div className="animate-element flex flex-col items-center gap-y-4">
                                    <div className="flex flex-col sm:flex-row items-center gap-3">
                                        <MainButton size="xl" className="bg-white text-black shadow-[0_0_60px_-15px_rgba(192,132,252,0.6)]">
                                            <QrCode className={"mr-2"} color={"black"} size={17}/> Get The App
                                        </MainButton>
                                        <MainButton size="xl" variant="secondary">
                                            <LucidePlay className={"mr-2"} fill={"white"} size={16}/> Watch The Demo
                                        </MainButton>
                                    </div>
                                    <p className="text-xs text-muted/80">Be a part of the next early access cohort.</p>
                                </div>

                                {/* Social proof */}
                                <div className="flex items-center gap-x-3 pt-4">
                                    <div className="flex -space-x-2">
                                        {Array.from({ length: 4 }).map((_, idx) => (
                                            <div key={idx} className={"relative h-8 w-8 rounded-full border-2 border-background overflow-x-hidden"}>
                                                <Image className={"object-cover"} src={`/mock-users/user${idx + 1}.webp`} alt={`mock user - ${idx + 1}`} fill/>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted/80">
                                        <span className="text-white font-medium">+1,200</span> music lovers already vibing
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Hero mockup + floating cards */}
                        <section className={"relative w-full flex justify-center items-center py-12 md:py-20 px-4"}>
                            <div className="relative w-full max-w-3xl">
                                {/* Soft ambient behind */}
                                <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 -z-10 h-[60%] rounded-full bg-fuchsia-500/[0.10] blur-[80px] hidden md:block"/>

                                {/* Floating card — Sound twin match (top-left, desktop only) */}
                                <div className="hidden md:flex absolute -left-16 lg:-left-24 top-[15%] z-20 animate-float [animation-delay:-1s]">
                                    <div className="flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/[0.10] backdrop-blur-md px-4 py-2 shadow-[0_8px_30px_-10px_rgba(192,132,252,0.5)]">
                                        <span className="text-lg leading-none">♪</span>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-[10px] uppercase tracking-widest text-fuchsia-300">Sound twin</span>
                                            <span className="text-sm text-white font-medium">98% match</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating card — Tag chips (bottom-left) */}
                                <div className="hidden md:flex flex-col gap-2 absolute -left-12 lg:-left-20 bottom-[10%] z-20 animate-float [animation-delay:-1.8s]">
                                    {["#indie", "#latenight"].map((t) => (
                                        <span key={t} className="self-start rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md px-3 py-1 text-xs text-white/80">{t}</span>
                                    ))}
                                </div>

                                {/* Floating card — Live listeners (top-right) */}
                                <div className="hidden md:flex absolute -right-12 lg:-right-20 top-[8%] z-20 animate-float">
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md px-3 py-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"/>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"/>
                                        </span>
                                        <span className="text-xs text-white/90"><span className="font-semibold text-white">+1,200</span> listening now</span>
                                    </div>
                                </div>

                                {/* Floating card — Equalizer (bottom-right) */}
                                <div className="hidden md:flex absolute -right-10 lg:-right-16 bottom-[15%] z-20 animate-float [animation-delay:-2.4s]">
                                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md px-3 py-2">
                                        <div className="flex items-end gap-0.5 h-5">
                                            {[0.5, 0.9, 0.4, 0.8, 0.6].map((h, i) => (
                                                <span
                                                    key={i}
                                                    className="w-[3px] bg-fuchsia-400 rounded-full"
                                                    style={{ height: `${h * 100}%` }}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-white/80">Playing</span>
                                    </div>
                                </div>

                                {/* The image */}
                                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_80px_-20px_rgba(192,132,252,0.35)]">
                                    <Image
                                        src={"/hero-mockup.jpeg"}
                                        alt={"Two friends sharing music moments on Jamly"}
                                        width={1252}
                                        height={705}
                                        sizes="(max-width: 768px) 100vw, 700px"
                                        className="w-full h-auto"
                                        priority
                                    />
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background/80"/>
                                </div>
                            </div>
                        </section>
                        {/*<VideoPresentationSection/>*/}

                        {/*FEATURES*/}
                        <FeaturesSection/>
                    </div>
                </div>

                <FooterSection/>

                {/* Blur gradient (z-20) */}
                <FooterBlurGradient position="bottom" intensity={1} height="h-14" />
            </main>
        </div>
    );
}