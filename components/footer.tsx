import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={"relative z-20 w-screen h-60 flex flex-col justify-between border-t border-white/10 py-6 mb-7"}>
            <div className={"w-9/12 mx-auto flex"}>
                <div className={"w-3/6"}>
                    <h1 className={"text-2xl text-white font-extrabold italic tracking-tight"}>JAMLY.</h1>
                </div>

                <div className={"w-2/5 flex justify-between px-10"}>
                    <div>
                        <p className={"text-white font-light"}>Help</p>

                        <ul>
                            <li>
                                <Link className={"text-sm text-muted font-light"} href={"#"}>
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link className={"text-sm text-muted font-light"} href={"#"}>
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={"text-white font-light"}>Legals</p>

                        <ul>
                            <li>
                                <Link className={"text-sm text-muted font-light"} href={"#"}>
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link className={"text-sm text-muted font-light"} href={"#"}>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={"w-9/12 mx-auto"}>
                <p className={"text-xs text-white/60"}>&copy; 2026 JAMLY. All rights reserved</p>
            </div>
        </footer>
    )
}