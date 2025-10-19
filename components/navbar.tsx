import Link from "next/link";

export const Navbar = () => {
    return (
        <div className={"w-screen h-24 flex justify-between items-center px-10"}>
            <Link href={"/"}>
                <h1 className={"text-3xl italic font-extrabold uppercase"}>Jamly.</h1>
            </Link>
        </div>
    )
}