import React from 'react'

const Input = (props) => {

    return  (
    <>
      <input type="text" onChange={props.handleChange}></input>
    </>
    )
    
}

export default Input