import React from "react"
import LastExcerciseChart from "./LastExcerciseChart"

export default function Dashboard(props) {
    
    const padding = props.showSideBar ? "pl-[340px]" : "pl-20"

    return (
        <div className={`pt-5 ${padding}`}>
            <LastExcerciseChart />
        </div>
    )
}