"use client";

import type { LucideIcon } from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/shadcn/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export function NavMain({
	titleNav,
	items,
}: {
	titleNav?: string;
	items: {
		title: string;
		url: string;
		icon?: ReactNode;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
}) {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<SidebarGroup>
			{titleNav && <SidebarGroupLabel>{titleNav}</SidebarGroupLabel>}
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton
							onClick={() => {
								router.push(item.url);
							}}
							className={`group w-[200px] h-10 my-1 transition-colors duration-200 [&>svg]:size-5 hover:bg-neutral-700 hover:cursor-pointer hover:text-white ${pathname.includes(item.url) ? "text-white" : "text-muted-foreground"}`}
							tooltip={item.title}
						>
							{item.icon}
							<span
								className={`text-xl font-medium transition-colors duration-200 group-hover:text-white ${pathname.includes(item.url) ? "text-white font-semibold" : "text-muted-foreground"}`}
							>
								{item.title}
							</span>
							{/*<Link className={`text-[13px] hover:text-for ${!item.isActive ? "text-muted-foreground/80" : "text-foreground"}`} href={item.url}>{item.title}</Link>*/}
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
