import React from 'react'

const DisplayButtons = ({setDisplay}) => {
  return (
    <div>
        <button onClick={() => setDisplay('All')} >All</button>
        <button onClick={() => setDisplay('Add')} >Add</button>
    </div>
  )
}

export default DisplayButtons