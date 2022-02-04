import React from 'react'
import _ from 'lodash'
const Login = () => {
    let array=[1, 2, 3]
    console.log(array);
   
   const state= _.partition(array, (item)=>item%2===0);
    console.log(state);
    return (
        <div>
             Đây là Login
        </div>
    )
}

export default Login
