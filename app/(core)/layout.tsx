import { BlurredBackground } from "@/app/(core)/home/_components/blurred-background";
import { Navbar } from "@/components/navbar";
import { SidebarProvider } from "@/components/ui/shadcn/sidebar";
import { MainSidebar } from "@/components/ui/sidebar/main-sidebar";
import type { ReactNode } from "react";

export default function CoreLayout({ children }: { children: ReactNode }) {
	return (
		<main className={"w-screen overflow-hidden"}>
			<Navbar />

			<SidebarProvider>
				<div className={"w-full h-auto flex justify-between"}>
					<BlurredBackground />

					<section
						className={
							"hidden lg:block sticky top-0 w-1/6 h-screen px-6 justify-center"
						}
					>
						<MainSidebar />
					</section>

					<section className={"w-4/6"}>{children}</section>

					<section className={"w-1/6"} />
				</div>
			</SidebarProvider>
		</main>
	);
}
