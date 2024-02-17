import React,{useState} from "react";




export const Question11 = () => {
  const [data,setData]=useState({name:''})

  const handle = (e) => {
      const value=e.target.value;
      const Name=e.target.name;
      setData({...data,[Name]:value})
     
   }
   const handling  = (e) => {
      e.preventDefault();
      if (data.name.length===0) {
          alert("please enter name")
          return;
      }
      else{
          alert("form submitted")
      }
      
   }
    
  
  return ( 
      <>
      <div className="mt-3 mb-3 container  align-items-center text-align-center">
      <h2>Question11</h2>
      <form onSubmit={handling}>
      <input type="name" onChange={handle} value={data.name} Name='name' placeholder="firstname"></input>
      </form>
      
      </div>
      </>
   );
}


export const Home = () => {
    return ( 
       <div>
        <h1>Home</h1>
       </div>
     );

}
export const Task12 = () => {
  const[email,setEmail]=useState('')
  const [error,setError]=useState('')


  const handle = (e) => {
      setEmail(e.target.value);
      setError('')

  }
      const handling  = (e) => {
          e.preventDefault();

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
              setError("please enter a valid email")
              return;
          }
          else{
              alert("form submitted")
          }
          
       }



  return (  
      <>
      <div className="mt-3 mb-3 container  align-items-center text-align-center">
      <h2>Question12</h2>
      <form onSubmit={handling}>
      <input placeholder="@email" type="email" onChange={handle} value={email} Name='email' ></input>
      <button className="text-bg-dark" type="submit">submit</button>
      <p> {error}</p>
      </form>

      </div>
      
      </>
      
  );
  
  }
   export const Form = () => {
    const[name,setname]=useState({

        firstname:'',
        lastname:'',
        phonenumber:'',
        email:'',  
    })
     const handling = (e) => {
        const value=e.target.value;
        const Name=e.target.name;
        setname({...name,[Name]:value})
       
     }
     const handle = (e) => {
        e.preventDefault();

        if (name.firstname.length<=5) {
            alert("enter maximum digit")
        }
        if (name.lastname.length<=3) {
            alert("enter maximum digit")
        } if (name.phonenumber.length<=10) {
            alert("enter maximum digit")
        }
        else{
            alert("form submitted")
        }
     }
    
      
    return (  
        <>
        <div className="mt-3 mb-3 container  align-items-center text-align-center">
          <h2>Question15</h2>
        <form onSubmit={handle}>
                <input type="text" value={name.firstname} onChange={handling} placeholder="firstName" name="firstname" required></input>
                <input type="text" value={name.lastname}  onChange={handling}  placeholder="lastName" name="lastname" required></input>
                <input type="number" value={name.phonenumber}  onChange={handling} placeholder="PhoneNumber" name="phonenumber" required></input>
                <input type="text" value={name.email}  onChange={handling} placeholder="email" name="email" required></input>
                <button className="text-bg-dark" >submit</button>
            </form>

        </div>
          
        </>
    
   
    );
}
