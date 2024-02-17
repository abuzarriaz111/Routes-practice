import React,{useState} from 'react'

const Hoc = (OriginalComponent) => {
    function NewComponent() {
        const[money,setMoney]=useState(10);

        const handleIncrement=()=>{
      setMoney(money*2)
          } 
          return (
            <OriginalComponent handleIncrement={handleIncrement} money={money}/>
          )
    }
  return NewComponent;
}

export default Hoc