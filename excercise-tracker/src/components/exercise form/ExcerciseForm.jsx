import React from "react"
import VolumeInput from "./VolumeInput"
import MinutesInput from "./MinutesInput"
import DateInput from "./DateInput"
import DescriptionInput from "./DescriptionInput"

export default function ExcerciseForm() {

    const [exerciseData, setExcerciseData] = React.useState({
        "description": "",
        "volume": 0,
        "minutes": 0,
        "date": ""
    })

    const volumeInput = <VolumeInput data={exerciseData} handleChange={handleChange}/>
    const minutesInput = <MinutesInput data={exerciseData} handleChange={handleChange}/>

    const quantityInput = exerciseData.description === "strength" ? volumeInput : minutesInput

    function handleChange(event) {
        const { name, value } = event.target
        
        setExcerciseData(prevState => {
            
            const descriptionChanged = name === "description" && prevState.description !== value

            let _minutes = prevState.minutes
            let _volume = prevState.volume
            
            if(descriptionChanged && value === "strength")
                _minutes = 0
            
            if(descriptionChanged && value !== "strength")
                _volume = 0            
            
            return {
                ...prevState,
                "volume": _volume,
                "minutes": _minutes,
                [name]: value
            }
        })
    }
    
    return (
        <form className="bg-slate-600 h-fit rounded-md m-2 flex flex-col items-start justify-center pl-5 pt-5 pb-5">
            <DescriptionInput
                data={exerciseData} 
                handleChange={handleChange}
            />
            {quantityInput}
            <DateInput
                data={exerciseData} 
                handleChange={handleChange}
            />
        </form>
    )
}