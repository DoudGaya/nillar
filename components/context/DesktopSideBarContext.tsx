'use client'

import { useContext, useState, createContext, ReactNode } from 'react'
// @ts-ignore
const DesktopSideBarContext = createContext()

const SideBarProvider = ({children}: {children: ReactNode}) => {
    const [desktopSidebar, setDesktopSidebar] = useState<boolean>(false)
     const switchDesktopNav = () => {
        return setDesktopSidebar((prev) => {
         return !prev
        })
    }
    return <DesktopSideBarContext.Provider value={{ switchDesktopNav, desktopSidebar, }}> {children} </DesktopSideBarContext.Provider>
}

export {SideBarProvider, DesktopSideBarContext }