import React from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import {Home , Question11,Task12,Form} from "./home";
import About from "./about";
import Contact from "./contact";
import Pagenotfound from "./component/Navigator";
import Student from "./Studentlist";
import Greeting from "./Greeting";


 export const Router = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="home" element={<><Home/><Question11/><Task12/><Form/></>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="Student" element={<Student/>}/>
            <Route path="Student/:student_name" element={<Greeting/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
        </Routes>


        </>
      );
}
 
