import {Button} from "@/components/ui/shadcn/button";
import {AppleIcon} from "@/components/icons/apple-icon";

export const GTAButton = () => {
    return (
        <Button className={"w-40 h-13 rounded-full text-[16.5px] font-bold hover:cursor-pointer"}>
            <AppleIcon className={"size-5"} width={64} height={64} fill={"#000"}/>
            Get the App
        </Button>
    )
}