"use client"
import { createContext, useContext, useRef } from "react";

interface ScrollContextProps {
    scrollToSection: (section: string) => void;
    serviceRef: React.RefObject<HTMLDivElement>;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

// Custom hook to use the context
export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScrollContext must be used within ScrollProvider");
    }
    return context;
};

// ScrollProvider Component
export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const serviceRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (section: string) => {
        if (section === "service" && serviceRef.current) {
            serviceRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <ScrollContext.Provider value={{ scrollToSection, serviceRef }}>
            {children}
        </ScrollContext.Provider>
    );
};
