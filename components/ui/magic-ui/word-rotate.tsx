"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.2, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <span className="relative inline-block align-baseline leading-[1.3]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className={cn(
            "inline-block leading-[1.3] py-[0.1em] pr-[0.05em] [transform:translateZ(0)] [will-change:transform,opacity]",
            className,
          )}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
