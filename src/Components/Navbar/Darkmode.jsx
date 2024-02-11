import React, { useState ,useEffect } from "react";
import Light from "../../assets/light-mode-button.png";
import Dark from "../../assets/dark-mode-button.png";

function Darkmode() {


   const[theme , setTheme]=React.useState(
   localStorage.getItem("theme")?localStorage.getItem("theme"):"Light");
 
const element=document.documentElement;
console.log(element);


React.useEffect(()=>{
    if(theme==="dark"){
        element.classList.add('dark');
        localStorage.setItem("theme" , "dark");
    }
    else{
        element.classList.remove("dark");
        localStorage.setItem("theme","light");
    }
} , [theme]);


  return (
    <div className="relative">
      <img
        src={Light}
        alt=""
       onClick={()=>setTheme(theme==="light" ?"dark" :"light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] translate-all duration-300 
        absolute right-0 z-10 ${theme==="dark" ? "opacity-0" :"opacity-100"}`} 
      />
         <img
        src={Dark}
        alt=""
        onClick={()=>setTheme(theme==="light" ?"dark" :"light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] translate-all duration-300"
      />
    </div>
  );
}

export default Darkmode;
