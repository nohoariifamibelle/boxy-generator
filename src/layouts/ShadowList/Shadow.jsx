import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import chevron from "../../assets/chevron.svg"
import ShadowColorPicker from "./ShadowColorPicker"
import ShadowRange from "./ShadowRange"
import ShadowCheckbox from "./ShadowCheckbox"
import { removeShadow } from "../../features/shadows"

function Shadow({panelNumber, shadow}) {
    const dispatch = useDispatch()
    const [toggleShadow, setToggleShadow] = useState(false)
    const shadowInputs = shadow.inputs.map((input, index) => {
        if(input.type === "range"){
            return <ShadowRange  key={index} inputData={shadow.inputs[index]} shadowID={shadow.id}/>
        } else if(input.type === "color"){
            return <ShadowColorPicker key={index} inputData={shadow.inputs[index]} shadowID={shadow.id}/>
        }
    })

    useEffect(() => {
        if(panelNumber === 1){
            setToggleShadow(true)
        }
    }, [])
    return (
        <li className="bg-gray-50 border-b border-gray-300">
            <button
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
            onClick={() => setToggleShadow(!toggleShadow)}
            >
                <span>Shadow {panelNumber}</span>
                <img 
                style={{
                    transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`
                }}
                src={chevron} 
                alt="Chevron"
                className="font-bold w-5" />
            </button>
            {toggleShadow && 
            <>
                <div className="flex items-end px-6 pt-4">
                    <ShadowCheckbox name={"active"} shadowID={shadow.id}/>
                    <ShadowCheckbox name={"inset"} shadowID={shadow.id}/>
                    <button onClick={() => dispatch(removeShadow(shadow.id))} className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded" >
                    Remove
                    </button>
                </div>
                <div className="px-6 py-4">
                    {shadowInputs}
                </div>
            </>}
        </li>
    )
}
export default Shadow