import type {FeatureProps} from "@/components/landing/features-section";
import {cn} from "@/lib/utils";
import {Check} from "lucide-react";

export const Feature = (props: FeatureProps) => {
    const Icon = props.icon;
    const indexLabel = props.index ? String(props.index).padStart(2, "0") : null;
    const isReversed = props.className?.includes("flex-row-reverse");

    return (
        <div className={cn("relative w-10/12 min-h-[70dvh] flex flex-col lg:flex-row justify-between items-center mx-auto gap-10 lg:gap-x-10", props.className)}>
            {/* Accent blob behind mockup */}
            {props.accentColor && (
                <div
                    className={cn(
                        "hidden lg:block absolute top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-br blur-[100px] pointer-events-none -z-10",
                        props.accentColor,
                        isReversed ? "right-0" : "left-0",
                    )}
                />
            )}

            <div className={"w-full lg:w-3/6 flex items-center justify-center py-8"}>
                {props.mockup}
            </div>

            <section className={"relative w-full lg:w-3/6 h-fit my-auto flex flex-col px-4 lg:px-20 gap-y-4"}>
                {/* Giant index watermark */}
                {indexLabel && (
                    <span
                        aria-hidden
                        className="hidden lg:block absolute -top-20 -left-2 select-none text-[10rem] xl:text-[12rem] font-bold leading-none tracking-tighter bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-transparent pointer-events-none"
                    >
                        {indexLabel}
                    </span>
                )}

                <div className={"relative flex items-center gap-x-2.5 text-muted"}>
                    <Icon size={20}/>
                    <h3 className={"font-medium uppercase text-sm tracking-wider"}>{props.caption}</h3>
                    {indexLabel && (
                        <span className="text-xs text-muted/60 ml-auto lg:hidden">{indexLabel} / 04</span>
                    )}
                </div>

                <h1 className={"relative text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tighter leading-[1.1]"}>{props.title}</h1>

                {props.subtitle && <h2 className={"relative text-white/80"}>{props.subtitle}</h2>}

                <p className={"relative text-muted"}>{props.description}</p>

                {props.bullets && props.bullets.length > 0 && (
                    <ul className={"relative flex flex-wrap gap-x-5 gap-y-2 pt-3"}>
                        {props.bullets.map((b) => (
                            <li key={b} className="inline-flex items-center gap-1.5 text-sm text-white/85">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-500/15 border border-fuchsia-400/30">
                                    <Check size={12} className="text-fuchsia-300"/>
                                </span>
                                {b}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    )
}
