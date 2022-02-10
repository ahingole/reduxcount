import React from 'react';
import  {useSelector,useDispatch} from "react-redux"
import {namechange} from "../redux"

function User() {

    const name = useSelector(state => state.Nam);
    const dispatch = useDispatch ()
  return (<div>
<h1>this is user components</h1>
<h1>this is user ---{name}</h1>


<button onClick={()=>dispatch(namechange())}>click</button>

  </div>);
}

export default User;
