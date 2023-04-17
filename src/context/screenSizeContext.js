import React, { useContext, createContext, useState, useEffect } from "react";

const ScreenSizeContext = createContext()

export function ScreenSizeProvider({ children }) {

    const [screenX, setScreenX] = useState(0)
    const [screenY, setScreenY] = useState(0)

    useEffect(() => {

        setScreenY(window.innerHeight)
        setScreenX(window.innerWidth)

        function getScreenSize() {
            setScreenY(window.innerHeight)
            setScreenX(window.innerWidth)
        }
        window.addEventListener('resize', () => getScreenSize())

        return () => window.removeEventListener('resize', () => getScreenSize())
    }, [])

    return (
        <ScreenSizeContext.Provider value={{
            screenX,
            setScreenX,
            screenY,
            setScreenY
        }}>
            {children}
        </ScreenSizeContext.Provider>
    )
}

export function useScreenSize() {
    return useContext(ScreenSizeContext)
}