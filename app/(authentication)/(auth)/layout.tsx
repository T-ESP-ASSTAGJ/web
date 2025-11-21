import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type * as React from "react";

export default async function AuthLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="relative flex w-[100dvw] h-[100dvh] flex-col md:flex-row">
			<div className={"absolute left-4 top-4"}>
				<Link
					href={"/"}
					className={
						"flex items-center gap-2 rounded-md px-3 py-2 font-medium text-muted-foreground text-xs hover:bg-accent/40 hover:text-foreground"
					}
				>
					<ChevronLeft size={15} fontWeight={"medium"} /> Back to app
				</Link>
			</div>
			{/* Left column */}
			{children}

			{/* Right column */}
			<section className="relative hidden flex-1 rounded-3xl md:block w-11/12 mr-5 my-5 overflow-hidden" />
		</div>
	);
}
