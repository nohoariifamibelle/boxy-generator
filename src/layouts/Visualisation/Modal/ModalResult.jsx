import getBoxShadowValue from "../../../utils/getBoxShadowValue"
import {useSelector} from "react-redux"
import { useEffect } from "react"
function ModalResult({closeModal}) {
    const shadowValues = useSelector(state => state.shadows)

    /**
     * Effet de bord : empêcher le scroll lorsque la modal apparaît
     * Fonction de nettoyage pour éviter que le scroll ne soit bloqué lorsqu'on revient sur la page principal
     */
    useEffect(() => {
        document.body.style.overflowY = "hidden"

        return () => {
            document.body.style.overflowY = "auto"
        }
    }, [])

    /**
     * Fonction de bloquage de Copie et bloquage de SPAM: 
     * On copie le code grâce à la fonction: navigator.clipboard.writeText()
     * Lorsque l'on va cliquer sur le bouton Copy, il ne sera pas possible de copier le code pendant 1,25 s.
     * 
     */
    let runningAnimation = false
    function handleCopy(e){
        if(!runningAnimation){
            runningAnimation = true
            e.target.textContent = "Copied !"

            setTimeout(() => {
                e.target.textContent = "Copy"
                runningAnimation = false
            }, 1250)
        }
        navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValue(shadowValues)}`)
    }

    
    return (
        <div 
            onClick={closeModal}
            className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75"
        >
            <div
            onClick={e => e.stopPropagation()}
            className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
            >
                <div className="flex items-end mb-5">
                    <p className="font-semibold mr-5">Here is your code !</p>
                    <button
                    onClick={handleCopy}
                    className="ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded"
                    >Copy</button>
                    <button
                    onClick={closeModal}
                    className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
                    >Closed</button>
                </div>
                <p className="rounded bg-gray-100 p-5">
                    <span className="font-semibold">box-shadow :</span>
                    <span> {getBoxShadowValue(shadowValues)}</span>
                </p>
            </div>
        </div>
    )
}
export default ModalResult