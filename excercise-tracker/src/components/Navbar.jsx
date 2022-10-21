import React from "react"
import DarkModeToggler from "./DarkModeToggler"
import { CiDumbbell } from "react-icons/ci"

export default function Navbar(props){
    
    return(
        <nav className="flex justify-between items-center w-screen h-24 bg-slate-800 text-slate-200 pr-14 pl-14">
            <div className="flex justify-center items-center">
                <CiDumbbell className="text-slate-100 text-5xl mr-2"/>
                <h2 className="font-bold text-3xl">Excercise Tracker</h2>
            </div>
            <div className="flex items-center justify-between w-80">
                <a href="#" className="font-semibold">About</a>
                <a href="#" className="font-semibold">Contact</a>
                <DarkModeToggler 
                    darkMode={props.darkMode} 
                    toggleDarkMode={props.toggleDarkMode}
                />
            </div>
        </nav>
    )
}