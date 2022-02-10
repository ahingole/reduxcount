import {BOOK_COUNT} from "./bookTypes"
import {NUM_COUNT} from "./bookTypes"
import {UPDATE_NAME} from "./bookTypes"
import {SHOW_COUNT} from "./bookTypes"


export const  BuyBook=(number=1)=>{
    return{
        type:BOOK_COUNT,
        payload:number

    }
}
export const  CountBook=()=>{
    return{
        type:NUM_COUNT
    }
}
export const  namechange=(Nam="pranit")=>{
    return{
        type:UPDATE_NAME,
        payload:Nam
    }
}
export const  toggle=()=>{
    return{
        type:SHOW_COUNT
    }
}