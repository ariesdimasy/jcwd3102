const actionType = {
    INCREMENT:"increment",
    DECREMENT:"decrement"
}

interface ICountState { 
    count:number
}

interface ICountAction {
    type:string, 
    payload:number     
}
/*
    const people = []
*/


export function counterReducer(state:ICountState, action:ICountAction){
    switch(action.type){
        case actionType.INCREMENT :
            // people.push(action.payload.name)
            return { count: state.count + action.payload }
        case actionType.DECREMENT : 
            return { count: state.count - action.payload }
        default :
            return state
    }   
}