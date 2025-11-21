import {Bookmark, Heart, MessageCircle} from "lucide-react";
import {Button} from "@/components/ui/shadcn/button";
import VitrineComments from "@/components/ui/vitrine/vitrine-comments";

export const Header = () => {
    return (
        <section
            className="relative h-[97.5dvh] rounded-4xl mx-3 mt-3 overflow-hidden"
        >
            {/* caler tout à l'intérieur de la section */}
            <video
                src="https://framerusercontent.com/assets/jzcC5JAn6lzi8PIOASz30CrTL0U.mp4"
                poster="https://framerusercontent.com/images/g6c4E6LAWGNMZSHbPzHynM7JzY.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 size-full object-cover block"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className={"absolute bottom-16 w-full h-80 flex justify-center items-center"}>
                <div className={"w-2/6"}/>

                <div className={"w-2/6 h-full flex justify-center items-end gap-x-6"}>
                    <Button className={"flex flex-row items-center gap-2 rounded-full size-13 bg-[#00000080] hover:bg-[#00000080] backdrop-blur-[5px] [&>svg]:!size-5"}>
                        <Heart color={"white"} strokeWidth={"2"} />
                    </Button>
                    <Button className={"flex flex-row items-center gap-2 rounded-full size-13 bg-[#00000080] hover:bg-[#00000080] backdrop-blur-[5px] [&>svg]:!size-5"}>
                        <MessageCircle color={"white"} strokeWidth={"2"} />
                    </Button>
                    <Button className={"flex flex-row items-center gap-2 rounded-full size-13 bg-[#00000080] hover:bg-[#00000080] backdrop-blur-[5px] [&>svg]:!size-5"}>
                        <Bookmark color={"white"} strokeWidth={"2"} />
                    </Button>
                </div>

                <div className={"w-2/6 h-auto flex justify-center mb-16"}>
                    <VitrineComments/>
                </div>
            </div>
        </section>
    );
};
