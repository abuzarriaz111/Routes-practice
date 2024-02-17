import React from 'react'

const Person2 = ({handleIncrement,money}) => {
  
  return (
    <div>
        <h1>Bunnty is Increasing The Money ${money}</h1> <br />
<button onClick={handleIncrement}>Increase</button>

    </div>
  )
}

export default Person2