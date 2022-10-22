import React from "react"
import TemporaryChart from "./TemporaryChart"

export default function Dashboard(props) {
    
    const padding = props.showSideBar ? "pl-[340px]" : "pl-20"

    return (
        <div className={`pt-5 ${padding}`}>
            <TemporaryChart />
        </div>
    )
}