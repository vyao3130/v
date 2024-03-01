'use client'
import { useState, useEffect } from "react";
import { HeaderDesktop } from "../header_d";
import { HeaderMobile } from "../header_m";

export const UseWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState<number>(window.innerWidth);

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions(window.innerWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);

    return <div>
        {window.innerWidth > 1200 ? <HeaderDesktop/>: <HeaderMobile/>}
        </div>;

}
