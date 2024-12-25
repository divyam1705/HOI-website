import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx"
import { NavigationMenuHelper } from "./NavigationMenu"
import { useState } from "react"

export const SliderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger >
                <RxHamburgerMenu className="h-5 w-5 md:hidden" />
            </SheetTrigger>

            <SheetContent className="bg-black text-[#D6CFB4] border-l-[1px] border-l-[#D6CFB4]">
                <div className="flex items-center justify-center !py-10 w-full">
                    <NavigationMenuHelper setIsOpen={setIsOpen} className="flex-col !gap-6 " />
                </div>

            </SheetContent>
        </Sheet>
    )
}
