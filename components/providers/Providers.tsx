"use client"
import { ThemeProvider } from "next-themes"
import { NavContextProvider } from "../context/MobileNavContext"
import { SideBarProvider } from "../context/DesktopSideBarContext"
export const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider attribute="class">
            {/* <NavContextProvider> */}
                {/* <SideBarProvider> */}
                    {children}
                {/* </SideBarProvider> */}
            {/* </NavContextProvider> */}
        </ThemeProvider>
    )
}