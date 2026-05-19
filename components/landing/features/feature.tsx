import type {FeatureProps} from "@/components/landing/features-section";
import {cn} from "@/lib/utils";
import type {ReactNode} from "react";

export const Feature = (props: FeatureProps) => {
    const Icon = props.icon;

    return (
        <div className={cn("w-10/12 min-h-[70dvh] flex flex-col lg:flex-row justify-between items-center mx-auto gap-10 lg:gap-x-10", props.className)}>
            <div className={"w-full lg:w-3/6 flex items-center justify-center py-8"}>
                {props.mockup}
            </div>

            <section className={"w-full lg:w-3/6 h-fit my-auto flex flex-col px-4 lg:px-20 gap-y-4"}>
                <div className={"flex items-center gap-x-2.5 text-muted"}>
                    <Icon size={20}/>
                    <h3 className={"font-medium uppercase text-sm tracking-wider"}>{props.caption}</h3>
                </div>

                <h1 className={"text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tighter leading-[1.1]"}>{props.title}</h1>

                {props.subtitle && <h2 className={"text-white/80"}>{props.subtitle}</h2>}

                <p className={"text-muted"}>{props.description}</p>
            </section>
        </div>
    )
}
