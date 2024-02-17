import React from 'react'

const Person1 = ({handleIncrement,money}) => {


  return (
    <div>
        <h1>Manan is Increasing the Money $ {money}</h1> <br />
        <button onClick={handleIncrement}>Increase</button>
    </div>
  )
}

export default Person1