import React,{useState} from 'react';
import {BuyBook,CountBook} from "../redux"
import{connect} from "react-redux"

function Bookshop(props) {
const [number, setnumber] = useState(0)

    return (
        <div> 
        <h1>number of books in lab-{props.numberofBook}</h1>
        <input type="text" value={number} onChange={e=>setnumber(e.target.value)}/>
        <h1>number count-{props.count}</h1>
        <button onClick={()=>props.BuyBook(number)} >click-{number}-number</button>
        <button onClick={props.CountBook} >counter</button>

        </div>
    )
}

const mapStatetoprops =(state)=>{
return{
    numberofBook:state.numberofBook,
    count:state.count
}
}

const mapDispatchtoprops=(dispatch)=>{
return{
    BuyBook:function(number){
        dispatch(BuyBook(number))
    },
    CountBook: function(){
        dispatch(CountBook())
    }
}

}
export default connect(mapStatetoprops,mapDispatchtoprops) (Bookshop);
