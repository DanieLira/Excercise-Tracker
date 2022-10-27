import React from "react"

export default function DateInput(props){
    return(
        <>
            <label htmlFor="date" className="text-slate-100 font-semibold">
                Date
            </label>
            <input
                name="date"
                type="date"
                value={props.data.date}
                onChange={event => props.handleChange(event)}
                placeholder="Date"
                className="rounded-sm w-11/12 p-1  mb-4"
            ></input>
            <button className="w-11/12 h-8 bg-slate-300 mt-3 rounded-sm hover:bg-slate-400">
                Submit
            </button>
        </>
    )
}