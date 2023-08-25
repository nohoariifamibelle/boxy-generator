import { createSlice } from "@reduxjs/toolkit";

/* --------
Dans ce fichier, on définit dans l'état inital (initialState) notre state global qui va contenir les propriétés de notre box.
Notre box possède 4 propriétés : Border Radius, Height et Width et sa Couleur
Un reducer sera nécessaire : updateBoxValue qui modifiera en fonction des valeurs transmises par les inputs les propriétés de la box.
*/
const initialState = [
    {
        inputNumber: 1,
        name: "Border radius",
        value: 25,
        type: "range",
        minMax: [0, 250]
    },
    {
        inputNumber: 2,
        name: "Height",
        value: 250,
        type: "range",
        minMax: [0, 500]
    },
    {
        inputNumber: 3,
        name: "Width",
        value: 250,
        type: "range",
        minMax: [0, 500]
    },
    {
        inputNumber: 4,
        name: "Background Color",
        value: "#ffffff",
        type: "color",
    }

]

/*
    updateBoxValue va chercher d'abord l'élément du state global qui correspond avec le nouvel élément puis va attribuer la valeur de cet élément au state global
*/
export const boxSlice = createSlice({
    name: "boxProperties",
    initialState,
    reducers: {
        updateBoxValue: (state, action) => {
            state.find(el => el.inputNumber === action.payload.inputNumber).value = action.payload.value
        }
    }
})

export const { updateBoxValue } = boxSlice.actions
export default boxSlice.reducer