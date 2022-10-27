import React from "react"
import UserForm from "./UserForm"
import ExcerciseForm from "./exercise form/ExcerciseForm"
import UserSelector from "./UserSelector"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

export default function ShownSideBar(props) {
    return (
        <div className="fixed w-80 h-screen bg-slate-700 pt-5 flex flex-col border-r-2 border-slate-300">
            <BsFillArrowLeftSquareFill
                onClick={props.toggleSideBar}
                className="text-slate-300 text-4xl cursor-pointer self-end mb-3 mr-2"
            />
            <UserSelector />
            <ExcerciseForm />
            <UserForm />
        </div>
    )
}