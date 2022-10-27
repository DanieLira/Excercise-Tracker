import React from "react"
import { BiTimer } from "react-icons/bi"

export default function MostMinutesDisplay(){
    
    const [longestSession, setLongestSession] = React.useState(40)
    
    return(
        <div className="bg-slate-50 rounded-lg drop-shadow-md w-56 p-5 mr-10">
            <p className="text-sm font-semibold text-slate-400">LONGEST SESSION</p>
            <hr className="mt-3 mb-3"/>
            <div className="flex items-center justify-around w-full">
                <h1 className="text-3xl font-semibold">{longestSession} Min</h1>
                <BiTimer className="text-4xl"/>
            </div>
        </div>
    )
}