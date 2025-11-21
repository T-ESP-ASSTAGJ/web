import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const GlassInputWrapper = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => (
	<div
		className={cn(
			"rounded-md border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-violet-400/70 focus-within:bg-violet-500/10",
			className,
		)}
	>
		{children}
	</div>
);
