import Link from "next/link";
import Notifications from "@/app/(core)/notifications/_components/notifications";

export const Navbar = () => {
    return (
        <div className={"relative z-50 w-screen h-24 flex justify-between items-center px-10"}>
            <Link href={"/"}>
                <h1 className={"text-3xl italic font-extrabold uppercase"}>Jamly.</h1>
            </Link>

            <Notifications />
        </div>
    )
}