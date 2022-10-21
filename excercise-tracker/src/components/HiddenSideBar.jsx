import React from "react"
import {BsFillArrowRightSquareFill} from "react-icons/bs"

export default function HiddenSideBar(props){
    return(
        <div className="fixed w-16 h-screen bg-slate-700 pt-16">
                <BsFillArrowRightSquareFill 
                    onClick={props.toggleSideBar}
                    className="text-slate-300 text-4xl absolute left-3.5 top-3 cursor-pointer"
                />
        </div>
    )
}