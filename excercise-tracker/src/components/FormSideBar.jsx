import React from "react"
import HiddenSideBar from "./HiddenSideBar"
import ShownSideBar from "./ShownSideBar"

export default function FormSideBar(props) {
    return (
        props.showSideBar ?
        <ShownSideBar toggleSideBar={props.toggleSideBar}/> :
        <HiddenSideBar toggleSideBar={props.toggleSideBar}/>
    )
}