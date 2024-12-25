"use client"

import * as React from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { services } from "@/data/services";
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useScrollContext } from "@/app/ScrollContext";
import { useRouter } from "next/navigation";

interface NavigationMenuProps {
    className?: string
    setIsOpen: (open: boolean) => void | null
}
export function NavigationMenuHelper({ className, setIsOpen }: NavigationMenuProps) {

    const components: { title: string; href: string; description: string }[] = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
                "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
                "For sighted users to preview content available behind a link.",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
            title: "Scroll-area",
            href: "/docs/primitives/scroll-area",
            description: "Visually or semantically separates content.",
        },
        {
            title: "Tabs",
            href: "/docs/primitives/tabs",
            description:
                "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
            title: "Tooltip",
            href: "/docs/primitives/tooltip",
            description:
                "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
    ]

    const [active, setActive] = React.useState<string | null>(null);

    const { scrollToSection } = useScrollContext();
    const router = useRouter();
    return (
        <NavigationMenu onMouseLeave={() => setActive(null)} className=" ">
            <NavigationMenuList className={cn("gap-2", className)}>
                <NavigationMenuItem onMouseEnter={() => setActive("home")}>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink onClick={() => setIsOpen(false)} className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                    <div >
                        <MenuItem onClick={() => { router.push("/services") }} setActive={setActive} active={active} item="Services">
                            <div onClick={() => setActive(null)} className="hidden   text-sm md:grid grid-cols-1  gap-6 md:gap-4  md:py-2 ">
                                {services.map((service) => (
                                    <ProductItem
                                        key={service.name}
                                        title={service.name}
                                        href={service.href}
                                        src={service.src}
                                        description={service.description}
                                    />
                                ))}
                            </div>
                        </MenuItem>
                    </div>
                </NavigationMenuItem> */}
                <NavigationMenuItem onMouseEnter={() => setActive("giftcard")}>
                    <div >
                        <MenuItem onClick={() => { }} setActive={setActive} active={active} item="Gift Card">
                            <div onClick={() => setActive(null)} className="z-10  text-sm grid grid-cols-1  gap-6 md:gap-4  md:py-2 ">
                                <Link className="hover:opacity-80" onClick={() => setIsOpen(false)} href={"https://www.toasttab.com/hoistl/giftcards"}                    >
                                    Create a Gift Card
                                </Link>
                                <Link className="hover:opacity-50" onClick={() => setIsOpen(false)} href={"https://www.toasttab.com/hoistl/findcard"}                    >
                                    Check Balance
                                </Link>

                            </div>
                        </MenuItem>
                    </div>
                </NavigationMenuItem>
                <NavigationMenuItem onMouseEnter={() => setActive("about")}>
                    <Link href="https://order.toasttab.com/online/hoistl" legacyBehavior passHref>
                        <NavigationMenuLink onClick={() => setIsOpen(false)} className={navigationMenuTriggerStyle()}>
                            Order
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <Link onMouseEnter={() => setActive("contact")} href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink onClick={() => setIsOpen(false)} className={navigationMenuTriggerStyle()}>
                        Catering
                    </NavigationMenuLink>
                </Link>
                {/* <NavigationMenuItem onMouseEnter={() => setActive("about")}>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink onClick={() => setIsOpen(false)} className={navigationMenuTriggerStyle()}>
                            About Us
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem onMouseEnter={() => setActive("about")}>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink onClick={() => setIsOpen(false)} className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        // <Navbar />
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = React.useState<string | null>(null);
    return (
        <div
            className={cn("inset-x-0 mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4 ">
                        {services.map((service) => (
                            <ProductItem
                                key={service.name}
                                title={service.name}
                                href={service.href}
                                src={service.src}
                                description={service.description}
                            />
                        ))}
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
