import React from "react"

export default function MinutesInput(props){
    return(
        <>
            <label htmlFor="minutes" className="text-slate-100 font-semibold">
                Minutes
            </label>
            <input
                name="minutes"
                type="number"
                value={props.data.minutes}
                onChange={event => props.handleChange(event)}
                placeholder="Minutes"
                className="rounded-sm w-11/12 p-1 mb-4"
            ></input>
        </>
    )
}