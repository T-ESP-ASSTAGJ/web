"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import {Spinner} from "@/components/ui/spinner";

// --- Variants ---------------------------------------------------------------
const buttonVariants = cva(
	"inline-flex select-none items-center justify-center rounded-xl font-medium transition-transform transition-colors duration-200 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98] group",
	{
		variants: {
			variant: {
				primary: "bg-white border border-transparent text-black disabled:bg-white/30",
				secondary: "bg-white/12 border border-transparent text-white backdrop-blur-sm",
				muted:
					"bg-default-100 border border-transparent hover:bg-transparent hover:border-border",
			},
			size: {
				sm: "h-8 px-3 text-xs gap-1.5",
				md: "h-9 px-4 text-sm gap-2",
				lg: "h-10 px-5 text-sm gap-2.5",
				xl: "h-14 text-base px-9 rounded-2xl",
				icon: "size-9",
			},
			fullWidth: {
				true: "w-full",
				false: "w-fit",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
			fullWidth: false,
		},
	},
);

// --- Types ------------------------------------------------------------------
export interface MainButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	id?: string;
	/** Text label (used if children not provided) */
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	isLoading?: boolean;
	loadingText?: string;
}

// --- Component --------------------------------------------------------------
const MainButton = React.forwardRef<HTMLButtonElement, MainButtonProps>(
	(
		{
			id,
			leftIcon,
			rightIcon,
			className,
			variant,
			size,
			fullWidth,
			isLoading = false,
			loadingText,
			children,
			disabled,
			type = "button",
			...rest
		},
		ref,
	) => {
		const isInactive = disabled || isLoading;

		return (
			<button
				id={id}
				ref={ref}
				type={type}
				className={cn(buttonVariants({ variant, size, fullWidth }), className)}
				disabled={disabled || isLoading}
				aria-busy={isLoading || undefined}
				data-loading={isLoading || undefined}
				{...rest}
			>
				{isLoading ? (
					<span className="inline-flex items-center gap-2">
						<Spinner />
						{loadingText ? (
							<span className="sr-only sm:not-sr-only">{loadingText}</span>
						) : null}
					</span>
				) : (
					<>
						{leftIcon ? (
							<span className="-ml-0.5 inline-flex">{leftIcon}</span>
						) : null}
						{typeof children === "string" ? (
							<span
								className={cn(
									"relative inline-flex overflow-hidden",
									isInactive ? "" : "group-hover:animate-slide",
								)}
							>
								<span
									className={cn(
										"translate-y-0 skew-y-0 transition duration-500",
										!isInactive &&
											"group-hover:-translate-y-[160%] group-hover:skew-y-12",
									)}
								>
									{children}
								</span>
								<span
									className={cn(
										"absolute translate-y-[164%] skew-y-12 transition duration-500",
										!isInactive &&
											"group-hover:translate-y-0 group-hover:skew-y-0",
									)}
								>
									{children}
								</span>
							</span>
						) : (
							<span className="inline-flex items-center">{children}</span>
						)}
						{rightIcon ? (
							<span className="ml-2 inline-flex -mr-0.5">{rightIcon}</span>
						) : null}
					</>
				)}
			</button>
		);
	},
);

MainButton.displayName = "MainButton";

export { MainButton, buttonVariants };
export default MainButton;
