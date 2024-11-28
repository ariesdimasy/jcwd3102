import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[
        "Aries",
        "Dimas",
        "Yudhistira"
    ],
    
}

const peopleSlice = createSlice({
    name:"people",
    initialState,
    reducers:{
        handleInsertPerson(state:{ value: string[]}, action){
            // const newData = people.concat(person)
            // setPeople(newData)
            // setPerson("")
            state.value.push(action.payload)
        
        },
       
    }
})

export const { handleInsertPerson } = peopleSlice.actions

export default peopleSlice.reducer