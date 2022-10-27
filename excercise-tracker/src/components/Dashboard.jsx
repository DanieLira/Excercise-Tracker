import React from "react"
import LastExcerciseChart from "./LastExcerciseChart"
import QuickDataDisplay from "./quick data display/QuickDataDisplay"
import VolumeProgressChart from "./VolumeProgressChart"

export default function Dashboard(props) {

    const padding = props.showSideBar ? "pl-[340px]" : "pl-20"

    return (
        <div className={`pt-5 ${padding} w-full`}>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <QuickDataDisplay />
            <div className="flex">
                <LastExcerciseChart />
                <VolumeProgressChart />
            </div>
        </div>
    )
}