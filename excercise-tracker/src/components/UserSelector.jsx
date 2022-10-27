import React from "react"
import { AiOutlineUserSwitch } from "react-icons/ai"
export default function UserSelector(){
    return(
        <div className="bg-slate-600 h-fit rounded-md m-2 flex flex-col items-start justify-center pl-5 pt-5 pb-5">
            <label htmlFor="userName" className="text-slate-100 pb-3 font-semibold flex items-center">
                <AiOutlineUserSwitch className="mr-2 text-xl"/>
                Current User
            </label>
            <select className="rounded-sm w-11/12 p-1">
                <option>Dany</option>
                <option>Esme</option>
            </select>
        </div>
    )
}