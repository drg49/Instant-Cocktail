import React from 'react'

const Input = (props) => {

    return  (
    <>
      <input type="text" onChange={props.handleChange} placeholder="Search an ingredient..."></input>
    </>
    )
    
}

export default Input