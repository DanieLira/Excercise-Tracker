import React from "react"

export default function VolumeInput(props){
    return(
        <>
            <label htmlFor="volume" className="text-slate-100 font-semibold">
                Volume (Kg)
            </label>
            <input
                name="volume"
                type="number"
                value={props.data.volume}
                onChange={event => props.handleChange(event)}
                placeholder="volume (kg)"
                className="rounded-sm w-11/12 p-1 mb-4"
            ></input>
        </>
    )
}