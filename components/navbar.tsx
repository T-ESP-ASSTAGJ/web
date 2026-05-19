"use client"

import MainButton from "@/components/ui/main-button";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import { useWindowScroll } from "react-use";
import {usePathname} from "next/navigation";
import {QrCode} from "lucide-react";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Discover", href: "#discover" },
    { label: "Features", href: "#features" },
    { label: "Roadmap", href: "/roadmap" },
];

export const Navbar = () => {
    const pathname = usePathname();

    const headerRef = useRef<HTMLElement | null>(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    // Scroll behavior
    useEffect(() => {
        if (!headerRef.current) return;

        if (currentScrollY <= 25) {
            setIsNavVisible(true);
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    const handleClick = (elementId: string) => {
        const el = document.getElementById(elementId.replace("#", ""));
        if (el) {
            const offset = elementId === "#features" ? 100 : elementId === "#get-the-app" ? 110 : 50; // Offset en pixels
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header
            ref={headerRef}
            className={`fixed z-50 left-1/2 -translate-x-1/2 rounded-xl duration-300 ${isNavVisible ? "w-screen h-18" : "w-11/12 sm:w-4/6 md:w-3/6 mx-auto h-14 bg-white m-4 shadow-md"}`}
        >
            <nav className={`h-full flex justify-between items-center mx-auto duration-300 ${isNavVisible ? "w-11/12 md:w-10/12" : "w-full px-4"}`}>
                <div className={"flex-1 md:w-2/6 flex justify-start items-center gap-x-2"}>
                    <h1 className={`${isNavVisible ? "text-2xl md:text-3xl text-white" : "text-xl md:text-2xl text-background"} font-extrabold italic`}>JAMLY.</h1>
                </div>

                <div className={"w-2/6 hidden md:flex justify-center items-center gap-x-2 mx-auto"}>
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            type={"button"}
                            onClick={() => handleClick(item.href)}
                            className={`rounded-lg border border-transparent px-3 py-2 text-sm ${isNavVisible ? "text-white/70 hover:border-white/5 hover:bg-white/10 hover:text-white" : "text-background/80 hover:border-background/5 hover:bg-background/10 hover:text-background"} backdrop-blur transition-all duration-300  lg:backdrop-blur-none`}
                            aria-current={pathname === item.href ? "page" : undefined}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className={"flex-1 md:w-2/6 flex justify-end items-center gap-x-2 sm:gap-x-4"}>
                   {/* <MainButton className={`duration-200 hidden sm:inline-flex ${isNavVisible ? "" : "hidden"}`} variant={"secondary"}>
                        Log In
                    </MainButton>*/}
                    <MainButton onClick={() => handleClick("#get-the-app")} className={`duration-200 ${!isNavVisible ? "bg-[#0C0C0C] text-white" : "bg-white"}`} leftIcon={<QrCode size={17}/>}>
                        Get The App
                    </MainButton>
                </div>
            </nav>
        </header>
    )
}