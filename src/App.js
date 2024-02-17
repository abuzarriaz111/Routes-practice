import logo from './logo.svg';
import './App.css';
import Loading from './loader';
import { Router,Routes } from './routers';
import { Link, NavLink, Navigate } from 'react-router-dom';
// import Nav from './component/Nav';
// import Banners from './component/Banners';
// import Data from './component/Data';
// import Person1 from "./component/person1";
// import Person2 from "./component/person2";
// import Hoc from "./component/HOC";
import MyComponent from './Studentlist';

// // const Enhance1=Hoc(Person1);
// // const Enhance2=Hoc(Person2);

function App() {
  return (
    <>
      <div className="">
      {/* <Nav/>
      <Banners/>
      <Data/>
  */}

      {<header>
     
      <nav>
        <ul className='container d-flex justify-content-between align-items-center list-unstyled'>
        < a href='#'>logo</a>
          <li className='me-2'><NavLink to="home">Questions1to5</NavLink></li>
          <li className='me-2'><NavLink to='about'>About</NavLink></li>
          <li className='me-2'><NavLink to='contact'>Contact</NavLink></li>
          <li className='me-2'><NavLink to='Student'>Students</NavLink></li>
          
        </ul>
      </nav>
      </header> }
     </div>
     <Router/>
     <div>
      {/* <Enhance1/>
      <Enhance2/>
      <MyComponent/> */}
     </div>
     </>
    
  );
}

export default App;
