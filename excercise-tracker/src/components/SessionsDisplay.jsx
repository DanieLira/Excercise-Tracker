import React from "react"
import { GiStairsGoal } from "react-icons/gi"
import { GiMountainClimbing } from "react-icons/gi"
import { SiSkyliner } from "react-icons/si"

export default function SessionsDisplay() {

    const [totalSessions, setTotalSessions] = React.useState(11)
    const iconClass = "text-4xl"

    let icon = <GiStairsGoal className={iconClass} />

    if (totalSessions > 5 && totalSessions < 10) {
        icon = <GiMountainClimbing className={iconClass} />
    }
    else if (totalSessions >= 10) {
        icon = <SiSkyliner className={iconClass} />
    }

    return (
        <div className="bg-slate-50 rounded-lg drop-shadow-md w-56 p-5">
            <p className="text-sm font-semibold text-slate-400">TOTAL SESSIONS</p>
            <hr className="mt-3 mb-3"/>
            <div className="flex items-center justify-around w-full ">
                <h1 className="text-3xl font-semibold">{totalSessions}</h1>
                {icon}
            </div>
        </div>
    )
}