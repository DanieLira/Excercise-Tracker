import React from "react"
import { WiDaySunny } from "react-icons/wi"
import { FaRegMoon } from "react-icons/fa"

export default function DarkModeToggler(props){
    const SWITCH_STL = `flex items-center justify-center bg-slate-800 h-8 rounded-full w-8 border absolute ${props.darkMode ? "right-0":"left-0"}`
    return (
        <div 
            className="relative cursor-pointer bg-slate-100 rounded-full w-16 h-8" 
            onClick={props.toggleDarkMode}
        >
            <div className={SWITCH_STL}>
                {
                    props.darkMode ?
                    <FaRegMoon className="text-yellow-400 text-xl"/>:
                    <WiDaySunny className="text-yellow-400 text-3xl"/>
                }
            </div>
        </div>    
    )
}