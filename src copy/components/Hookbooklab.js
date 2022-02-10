import React from 'react';
import  {useSelector,useDispatch} from "react-redux"
import {BuyBook} from "../redux"


function Hookbooklab() {
    const numberofBook = useSelector(state => state.numberofBook);
    const dispatch = useDispatch ()
    return (
        <div>
            <h1>hook in redux</h1>
            <h2>number oi book status in lab={numberofBook}</h2>
            <button onClick={()=>dispatch(BuyBook())}>click hook</button>
        </div>
    )
}

export default Hookbooklab
