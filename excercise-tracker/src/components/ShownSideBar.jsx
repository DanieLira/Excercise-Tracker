import React from "react"
import UserForm from "./UserForm"
import ExcerciseForm from "./ExcerciseForm"
import {BsFillArrowLeftSquareFill} from "react-icons/bs"

export default function ShownSideBar(props) {
    return (
        <div className="fixed w-80 h-screen bg-slate-700 pt-16">
            <BsFillArrowLeftSquareFill
                onClick={props.toggleSideBar}
                className="text-slate-300 text-4xl absolute right-3 top-3 cursor-pointer"
            />
            <UserForm />
            <ExcerciseForm />
        </div>
    )
}