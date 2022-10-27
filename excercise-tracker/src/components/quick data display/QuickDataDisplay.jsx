import React from "react"
import SessionsDisplay from "./SessionsDisplay"
import BiggestVolumeDisplay from "./BiggestVolumeDisplay"
import MostMinutesDisplay from "./MostMinutesDisplay"


export default function QuickDataDisplay(){

    return(
        <div className="pb-10 pt-5 flex">
            <SessionsDisplay />
            <BiggestVolumeDisplay />
            <MostMinutesDisplay />
        </div>
    )
}