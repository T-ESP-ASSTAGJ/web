"use client";

import { cn } from "@/lib/utils";
import {
    Airplay,
    Clapperboard, Compass, Home,
    Unplug, Users, UsersRound,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {useMediaQuery} from "usehooks-ts";
import {NavMain} from "@/components/ui/sidebar/nav-main";

export const MainSidebar = () => {
	const pathname = usePathname();

	const [isCollapsed, setIsCollapsed] = useState(false);
	const isMobile = useMediaQuery("(max-width: 768px)");

	const isCompact = isMobile || isCollapsed;

	const onToggle = () => {
		setIsCollapsed(!isCollapsed);
	};

	const dashboard_nav = [
		{
			title: "Accueil",
			url: "/home",
            icon: <Home strokeWidth={1.85}/>,
		},
        {
            title: "Explore",
            url: "/explore",
            icon: <Compass strokeWidth={1.85}/>
        },
        {
            title: "Friends",
            url: "/friends",
            icon: <UsersRound strokeWidth={1.85}/>
        }
	];

	return (
		<>
			<div
				className={cn(
					"hidden lg:flex h-full flex-none flex-col transition-width mx-auto",
					{
						"w-16 items-center px-2 py-6" : isCompact,
					},
				)}
			>
				{/*<div className="flex flex-row justify-between px-3">
                    {isCompact && (
                        <button  className="flex h-8 w-8 items-center justify-center rounded-full">
                            <BiCollapse/>
                        </button>
                    )}
                </div>*/}
				<div
					className={cn("flex items-center gap-3 px-3", {
						"justify-center gap-0": isCompact,
					})}
				/>
				<NavMain items={dashboard_nav} />

				{/*<div
					className={cn("w-4/5 mt-auto flex flex-col gap-y-3", {
						"items-center": isCompact,
					})}
				>
					<NavMain items={other_nav} />
				</div>*/}
			</div>
		</>
	);
};
