"use client"
import { useContext, useState, createContext, ReactNode } from "react"

// @ts-ignore
const NavContext = createContext()

const NavContextProvider = ({ children }: { children: ReactNode }) => {
    const [mobileNav, setMobileNav] = useState(false)
    const changeNav = () => {
        return setMobileNav((prev) => {
         return !prev
        })
    }

    return <NavContext.Provider value={{ changeNav, mobileNav }}> { children }</NavContext.Provider>
}

export {NavContextProvider, NavContext}