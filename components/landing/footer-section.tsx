"use client"

import MainButton from "@/components/ui/main-button";

export const FooterSection = () => {
    return (
        <section id={"get-the-app"} className={"relative w-screen h-auto flex flex-col my-28"}>
            {/* Background halo */}
            <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-purple-600/[0.10] blur-[180px]"/>
                <div className="absolute left-1/3 top-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/[0.10] blur-[140px]"/>
                <div className="absolute right-1/4 bottom-1/4 w-[420px] h-[420px] rounded-full bg-fuchsia-500/[0.08] blur-[150px]"/>
            </div>

            <div className={"relative z-10 mx-auto w-11/12 max-w-5xl"}>
                <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl px-8 py-16 overflow-hidden">
                    {/* Inner gradient sweep */}
                    <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.18),transparent_60%)]"/>

                    <div className={"relative flex flex-col items-center gap-y-7"}>
                        <div className={"bg-white rounded-xl px-7 py-2 shadow-[0_0_40px_-10px_rgba(244,114,182,0.6)]"}>
                            <h1 className={"text-2xl text-[#0C0C0C] font-extrabold italic"}>JAMLY.</h1>
                        </div>

                        <div className={"space-y-4 text-center"}>
                            <h3 className={"text-5xl md:text-7xl text-[#f4f2f0] font-outfit font-medium tracking-tighter"}>
                                Join The <span className="text-gradient-brand">Community</span>
                            </h3>
                            <p className={"text-lg text-muted/80 max-w-xl mx-auto"}>Your entire musical world, in one place. Sound on.</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-3 mt-4">
                            <MainButton size="xl" className="shadow-[0_0_60px_-15px_rgba(192,132,252,0.7)]">
                                Get The App
                            </MainButton>
                            <p className="text-xs text-muted/80">Be a part of the next early access cohort.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient glow instead of external image */}
           {/* <motion.div
                className="relative w-full h-full overflow-hidden"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[700px] h-[700px] rounded-full bg-purple-600/[0.08] blur-[150px]"/>
                </div>
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/[0.06] blur-[120px]"/>
                <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-blue-500/[0.04] blur-[100px]"/>
                <div className={"absolute bottom-0 w-full h-50 bg-linear-to-b to-background to-60%"}/>
            </motion.div>*/}
        </section>
    )
}
