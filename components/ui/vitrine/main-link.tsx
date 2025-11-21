import {cn} from "@/lib/utils";
import * as React from "react";
import Link from "next/link";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    href: string;
}

export const MainLink = ({ children, href }: Props) => {
    return (
        <Link
            href={href}
            className={"group text-lg font-medium"}
        >
             <span
                 className={cn(
                     "relative inline-flex overflow-hidden group-hover:animate-slide"
                 )}
             >
								<span
                                    className={cn(
                                        "translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12",
                                    )}
                                >
									{children}
								</span>
								<span
                                    className={cn(
                                        "absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0"
                                    )}
                                >
									{children}
								</span>
							</span>
        </Link>
    )
}