import React from "react"
import { CiDumbbell } from "react-icons/ci"

export default function BiggestVolumeDisplay() {

    const [biggestVolume, setBiggestVolume] = React.useState(20)

    return (
        <div className="bg-slate-50 rounded-lg drop-shadow-md w-56 p-5 mr-10">
            <p className="text-sm font-semibold text-slate-400">BIGGEST VOLUME (SESSION)</p>
            <hr className="mt-3 mb-3"/>
            <div className="flex items-center justify-around w-full">
                <h1 className="text-3xl font-semibold">{biggestVolume} kg</h1>
                <CiDumbbell className="text-4xl"/>
            </div>
        </div>
    )
}