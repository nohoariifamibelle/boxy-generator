import {useSelector, useDispatch} from "react-redux"
import Shadow from "./Shadow"
import {addShadow} from "../../features/shadows"


function ShadowList() {
    const dispatch = useDispatch();
    const shadows = useSelector(state => state.shadows)
    return (
        <div>
            <div className="flex justify-between p-6 border-b border-gray-300">
                <p className="font-bold text-lg">Customize Shadows</p>
                <button 
                className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 text-white"
                onClick={() => dispatch(addShadow())}
                >Add a Shadow</button>
            </div>
            <ul>
                {shadows.map((shadow, index) => (
                    <Shadow 
                    panelNumber={index + 1}
                    shadow={shadow}
                    key={shadow.id} />
                ))}
            </ul>
        </div>
    )
}
export default ShadowList