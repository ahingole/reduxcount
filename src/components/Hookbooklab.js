import React from 'react';
import  {useSelector,useDispatch} from "react-redux"
import {BuyBook} from "../redux"
import {toggle} from "../redux"



function Hookbooklab() {
    const numberofBook = useSelector(state => state.numberofBook);
    const show = useSelector(state => state.show);

    const dispatch = useDispatch ()
    return (
        <div>
            <h1>hook in redux</h1>
            <h2>number oi book status in lab={show && numberofBook}</h2>
            <button onClick={()=>dispatch(BuyBook())}>click hook</button>
            <button onClick={()=>dispatch(toggle())}>toggle</button>

        </div>
    )
}

export default Hookbooklab
