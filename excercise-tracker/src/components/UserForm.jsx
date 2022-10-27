import React from "react"
import { AiOutlineUserAdd } from "react-icons/ai"

export default function UserForm() {
    const [userName, setUserName] = React.useState("")

    function handleChange(event) {
        const { value } = event.target
        setUserName(value)
    }

    return (
        <form className="bg-slate-600 h-fit rounded-md m-2 flex flex-col items-start justify-center pl-5 pt-5 pb-5">

            <label htmlFor="userName" className="text-slate-100 pb-3 font-semibold flex items-center">
                <AiOutlineUserAdd className="mr-2 text-xl"/>
                Create New User
            </label>
            <input
                name="userName"
                type="text"
                value={userName}
                onChange={handleChange}
                placeholder="User name"
                className="rounded-sm w-11/12 p-1"
            ></input>
            <button className="w-11/12 h-8 bg-slate-300 mt-3 rounded-sm hover:bg-slate-400">
                Submit
            </button>
        </form>
    )
}