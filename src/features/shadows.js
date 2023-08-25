import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

/* --------
Dans ce fichier, on définit dans l'état inital (initialState) notre state global qui va représenter un tableau de x Shadow(s).
Chaque Shadow est un objet qui contient :
- un id unique généré par la librairie nanoid
- deux booléens active et inset qui représentent les deux checkboxs 
- un tableau d'inputs contenant la taille (Horizontal/Vertical), le blur, le spread et la couleur de la Shadow.

On définit ensuite les reducers qui vont nous permettre de modifier l'état global.
Il va y avoir 4 actions :
- addShadow : ajoute une Shadow à la fin du tableau
- removeShadow : supprime une Shadow du tableau
- updateShadowValue : met à jour la valeur d'un input d'une Shadow
- updateCheckbox : met à jour la valeur d'une checkbox d'une Shadow
*/
const initialState = [
    {
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
            {
                inputNumber: 1,
                name: "Horizontal Offset",
                value: 0,
                type: "range",
                minMax: [-250, 250]
            },
            {
                inputNumber: 2,
                name: "Vertical Offset",
                value: 10,
                type: "range",
                minMax: [-250, 250]
            },
            {
                inputNumber: 3,
                name: "Blur Radius",
                value: 15,
                type: "range",
                minMax: [0, 250]
            },
            {
                inputNumber: 4,
                name: "Horizontal Offset",
                value: -3,
                type: "range",
                minMax: [-250, 250]
            },
            {
                inputNumber: 5,
                name: "Color",
                value: "#4F4F4F",
                type: "color",
            }
        ]
    }
]

export const shadowSlice = createSlice({
    name: "shadows",
    initialState,
    reducers: {
        addShadow: (state, action) => {
            state.push(
                {
                    id: nanoid(8),
                    active: true,
                    inset: false,
                    inputs: [
                        {
                            inputNumber: 1,
                            name: "Horizontal Offset",
                            value: 0,
                            type: "range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 2,
                            name: "Vertical Offset",
                            value: 10,
                            type: "range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 3,
                            name: "Blur Radius",
                            value: 15,
                            type: "range",
                            minMax: [0, 250]
                        },
                        {
                            inputNumber: 4,
                            name: "Horizontal Offset",
                            value: -3,
                            type: "range",
                            minMax: [-250, 250]
                        },
                        {
                            inputNumber: 5,
                            name: "Color",
                            value: "#4F4F4F",
                            type: "color",
                        }
                    ]
                },
            )
        },
        removeShadow: (state, action) => {
            const shadowIndexToRemove = state.findIndex(shadow => shadow.id === action.payload)
            state.splice(shadowIndexToRemove, 1)
        },
        updateShadowValue: (state, action) => {
            const currentShadow = state.find(shadow => shadow.id === action.payload.shadowID)
            const currentInput = currentShadow.inputs.find(
                input => input.inputNumber === action.payload.inputNumber
            )
            currentInput.value = action.payload.value
        },
        updateCheckbox: (state, action) => {
            const currentShadow = state.find(shadow => shadow.id === action.payload.shadowID)
            currentShadow[action.payload.name] = !currentShadow[action.payload.name]
        }
    }
})

export const { updateCheckbox, addShadow, removeShadow, updateShadowValue } = shadowSlice.actions
export default shadowSlice.reducer