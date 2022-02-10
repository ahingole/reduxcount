import {BOOK_COUNT} from "./bookTypes"
import {NUM_COUNT} from "./bookTypes"


const initialstate ={
    numberofBook:10,
    count:0
}

const bookReducer = (state=initialstate,action)=>{
    switch(action.type){
case BOOK_COUNT:return{
    ...state,
    numberofBook:state.numberofBook-1
}
case NUM_COUNT:return{
    ...state,
    count:state.count+1
}
default:return state;
    }

}

export default bookReducer;