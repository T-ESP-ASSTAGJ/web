import {Camera, User} from "lucide-react";
import Image from "next/image";

interface CaptureMockupProps {
    /** Back-camera shot (square-ish). Drop into /public/mockups/ */
    backImage?: string;
    /** Front-camera selfie (square) */
    frontImage?: string;
}

export const CaptureMockup = ({backImage, frontImage}: CaptureMockupProps = {}) => (
    <div className="w-full max-w-[300px] mx-auto">
        <div className="rounded-[28px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl overflow-hidden p-3">
            {/* Main camera area */}
            <div className="relative h-[260px] rounded-2xl bg-gradient-to-br from-orange-500/70 to-pink-500/70 overflow-hidden">
                {backImage && (
                    <Image src={backImage} alt="Back camera" fill className="object-cover" sizes="280px"/>
                )}

                {/* Grid overlay */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                    {Array.from({length: 9}).map((_, i) => (
                        <div key={i} className="border border-white/[0.08]"/>
                    ))}
                </div>

                {/* Center crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 rounded-full border border-white/40"/>
                </div>

                {/* Camera badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/30 backdrop-blur-md rounded-full border border-white/20">
                    <Camera size={10} className="text-white"/>
                    <span className="text-[10px] font-medium text-white">Back</span>
                </div>

                {/* Selfie overlay */}
                <div className="absolute top-3 right-3 w-16 h-16 rounded-xl  border-2 border-white/30 overflow-hidden flex items-center justify-center">
                    {frontImage ? (
                        <Image src={frontImage} alt="Front camera" fill className="object-cover" sizes="64px"/>
                    ) : (
                        <User size={22} className="text-white/40"/>
                    )}
                    <div className="absolute bottom-0.5 right-0.5 z-10 w-3 h-3 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                        <Camera size={6} className="text-white/90"/>
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
