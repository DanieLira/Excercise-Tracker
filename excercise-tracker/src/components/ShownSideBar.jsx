import React from "react"
import UserForm from "./UserForm"
import ExcerciseForm from "./ExcerciseForm"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

export default function ShownSideBar(props) {
    return (
        <div className="fixed w-80 h-screen bg-slate-700 pt-5 flex flex-col">
            <BsFillArrowLeftSquareFill
                onClick={props.toggleSideBar}
                className="text-slate-300 text-4xl cursor-pointer self-end mb-3 mr-2"
            />
            <UserForm />
            <ExcerciseForm />
        </div>
    )
}