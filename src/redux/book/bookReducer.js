import {BOOK_COUNT, UPDATE_NAME} from "./bookTypes"
import {NUM_COUNT} from "./bookTypes"
import {SHOW_COUNT} from "./bookTypes"







const initialstate ={
    numberofBook:10,
    count:0,
    Nam:"akash",
    show:false
    
}

const bookReducer = (state=initialstate,action)=>{
    switch(action.type){
case BOOK_COUNT:return{
    ...state,
    numberofBook:state.numberofBook-action.payload,
    // show:state.show

}
case NUM_COUNT:return{
    ...state,
    count:state.count+1,
    // show:state.show

}
case UPDATE_NAME:return{
    ...state,
    Nam: "ingole" ,
    Nam:action.payload
    // show:state.show

    
}
case SHOW_COUNT:return{
    ...state,
    show:!state.show
}
default:return state;
    }

}

export default bookReducer;