import {Camera, User} from "lucide-react";

export const CaptureMockup = () => (
    <div className="w-full max-w-[300px] mx-auto">
        <div className="rounded-[28px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl overflow-hidden p-3">
            {/* Main camera area */}
            <div className="relative h-[260px] rounded-2xl bg-gradient-to-br from-orange-500/70 to-pink-500/70 overflow-hidden">
                {/* Grid overlay */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                    {Array.from({length: 9}).map((_, i) => (
                        <div key={i} className="border border-white/[0.08]"/>
                    ))}
                </div>

                {/* Center crosshair */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border border-white/30"/>
                </div>

                {/* Camera badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <Camera size={10} className="text-white"/>
                    <span className="text-[10px] font-medium text-white">Back</span>
                </div>

                {/* Selfie overlay */}
                <div className="absolute top-3 right-3 w-16 h-16 rounded-xl bg-gradient-to-br from-pink-400/80 to-orange-500/80 border-2 border-white/25 flex items-center justify-center overflow-hidden">
                    <User size={22} className="text-white/40"/>
                    <div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-white/10 flex items-center justify-center">
                        <Camera size={6} className="text-white/70"/>
                    </div>
                </div>
            </div>

            {/* Capture button */}
            <div className="flex justify-center mt-4 mb-1">
                <div className="w-14 h-14 rounded-full border-[3px] border-white/40 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white"/>
                </div>
            </div>
        </div>
    </div>
);
