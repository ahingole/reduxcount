
import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {toggle} from "../redux"


function User1() {
    const active = useSelector(state => state.show);
    const dispatch = useDispatch ()



    const colo= {
        height:"400px",
        width:  active ? "400px" : "600px",
        background: active ? "blue" ? "yellow":"pink" : "red" ,
        margin:"auto",
        color: "yellow"
    }
  return (
      <>
  <div onClick={()=> dispatch(toggle())}>
      <h1> disapering box </h1>
      <h2> click the box</h2>
 <div 
 style={colo}>
 </div>
  </div>
  </>)
}

export default User1;