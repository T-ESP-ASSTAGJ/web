import Link from "next/link";
import {MainLink} from "@/components/ui/vitrine/main-link";
import {GTAButton} from "@/components/ui/gta-button";

export const Navbar = () => {
	return (
		<nav
			className={
				"fixed top-2 z-50 w-screen mx-auto py-8 px-16 flex justify-between items-center"
			}
		>
			<div className={"w-2/6 flex items-center gap-x-6"}>
				<MainLink href={"#"}>
                    Features
                </MainLink>
                <MainLink href={"#"}>
                    FAQs
                </MainLink>
                <MainLink href={"#"}>
                    Support
                </MainLink>
			</div>

            <div className={"w-2/6 flex justify-center items-center"}>
                <Link href={"/"} className={"text-4xl font-extrabold uppercase italic"}>
                    Jamly.
                </Link>
            </div>

            <div className={"w-2/6 flex justify-end items-center"}>
                <GTAButton/>
            </div>
		</nav>
	);
};
