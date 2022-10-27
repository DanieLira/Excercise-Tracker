import React from "react"
import { BiRun } from "react-icons/bi"

export default function DescriptionInput(props){
    return(
        <>
            <h3 className="text-slate-100 font-semibold mb-6 flex items-center ">
                <BiRun className="text-xl mr-2" />
                Add Excercise for [user]
            </h3>
            <label htmlFor="description" className="text-slate-100 font-semibold">
                Description
            </label>
            <select
                name="description"
                type="text"
                value={props.data.description}
                onChange={event => props.handleChange(event)}
                className="rounded-sm w-11/12 p-1 mb-4"
            >
                <option value="strength">Strength</option>
                <option value="cardio">Cardio</option>
                <option value="flexibility">Flexibility</option>
            </select>
        </>
    )
}