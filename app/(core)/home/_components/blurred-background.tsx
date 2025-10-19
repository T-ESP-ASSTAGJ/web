"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/stores/use-app-store";

export const BlurredBackground = () => {
    const { actualBackgroundBlur } = useAppStore();

    if (!actualBackgroundBlur) return null;

    return (
        <div className="absolute inset-0 w-full h-full flex justify-center items-center opacity-10 blur-2xl">
            <motion.img
                key={actualBackgroundBlur} // use the URI as key so framer-motion animates on change
                src={actualBackgroundBlur}
                alt="" // accessibility: mark as decorative
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
        </div>
    );
};
