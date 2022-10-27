import React from "react"
import { BiRun } from "react-icons/bi"

export default function ExcerciseForm() {

    const [excerciseData, setExcerciseData] = React.useState({
        "description": "",
        "minutes": 0,
        "date": ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setExcerciseData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(excerciseData)
    }

    return (
        <form className="bg-slate-600 h-fit rounded-md m-2 flex flex-col items-start justify-center pl-5 pt-5 pb-5">
            <h3 className="text-slate-100 font-semibold mb-6 flex items-center ">
                <BiRun className="text-xl mr-2"/>
                Add Excercise for [user]
            </h3>
            <label htmlFor="description" className="text-slate-100 font-semibold">
                Description
            </label>
            <input
                name="description"
                type="text"
                value={excerciseData.description}
                onChange={handleChange}
                placeholder="Description"
                className="rounded-sm w-11/12 p-1 mb-4"
            ></input>
            <label htmlFor="minutes" className="text-slate-100 font-semibold">
                Minutes
            </label>
            <input
                name="minutes"
                type="number"
                value={excerciseData.minutes}
                onChange={handleChange}
                placeholder="Minutes"
                className="rounded-sm w-11/12 p-1 mb-4"
            ></input>
            <label htmlFor="date" className="text-slate-100 font-semibold">
                Date
            </label>
            <input
                name="date"
                type="date"
                value={excerciseData.date}
                onChange={handleChange}
                placeholder="Date"
                className="rounded-sm w-11/12 p-1  mb-4"
            ></input>
            <button className="w-11/12 h-8 bg-slate-300 mt-3 rounded-sm hover:bg-slate-400">
                Submit
            </button>
        </form>
    )
}