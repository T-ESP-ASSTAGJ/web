"use client";

import { faqItems } from "@/config/faq-data";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Accordion Item ───────────────────────────────────────────

interface FaqItemProps {
	index: number;
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
}

function FaqItem({ index, question, answer, isOpen, onToggle }: FaqItemProps) {
	return (
		<div className={"first:border-none border-t border-white/10 last:border-t"}>
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={isOpen}
				className={
					"w-full flex items-start gap-4 py-6 text-left cursor-pointer group"
				}
			>
				{/* Number */}
				<span
					className={
						"text-xs font-mono text-white/30 tabular-nums pt-1.5 shrink-0 transition-colors duration-300 group-hover:text-white/60"
					}
				>
					{String(index + 1).padStart(2, "0")}
				</span>

				{/* Question + icon */}
				<div className={"flex-1 flex items-start justify-between gap-6"}>
					<h3
						className={
							"text-base lg:text-lg font-semibold tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-white/70"
						}
					>
						{question}
					</h3>

					{/* Animated + / − icon */}
					<div className={"relative size-6 shrink-0 mt-0.5 text-white/50"}>
						<motion.span
							className={"absolute inset-0 flex items-center justify-center"}
							animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path
									d="M8 3v10M3 8h10"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</motion.span>
						<motion.span
							className={"absolute inset-0 flex items-center justify-center"}
							animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path
									d="M3 8h10"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</motion.span>
					</div>
				</div>
			</button>

			{/* SEO: Contenu toujours dans le DOM pour l'indexation */}
			<p className="sr-only">{answer}</p>

			{/* Animation visible */}
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{
							height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
							opacity: { duration: 0.3, delay: 0.05 },
						}}
						className={"overflow-hidden"}
					>
						<motion.p
							initial={{ y: -10 }}
							animate={{ y: 0 }}
							exit={{ y: -10 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							aria-hidden="true"
							className={
								"pb-6 lg:pb-8 ml-10 max-w-2xl text-base lg:text-lg text-white/50 leading-relaxed"
							}
						>
							{answer}
						</motion.p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

// ─── FAQ Section ──────────────────────────────────────────────

export function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section id="faq" className="relative z-20 px-4 py-24 md:px-6">
			<div className="mx-auto max-w-3xl">
				<div className="mb-12 text-center">
					<p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/40">
						FAQ
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl mt-2">
						Frequently asked questions
					</h2>
					<p className="mt-4 text-base text-white/50">
						Everything you need to know about Jamly.
					</p>
				</div>

				<div>
					{faqItems.map((item, index) => (
						<FaqItem
							key={item.question}
							index={index}
							question={item.question}
							answer={item.answer}
							isOpen={openIndex === index}
							onToggle={() => handleToggle(index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
