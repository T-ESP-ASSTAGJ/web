"use client"

import { motion } from "framer-motion"
import type {ReactNode} from "react";

export function AnimatedWrapper({ children }: { children: ReactNode}) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            {children}
        </motion.div>
    )
}