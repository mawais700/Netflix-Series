import React from "react";
import Card from "./Cards";
import "./index.css";
import sdata from "./Sdata";

function App(){

  return ( <>
  <h1 className="heading_style">List of Top 5 Netflix Series </h1>
    {
      sdata.map( (Cval, ind)=>{
        {/* console.log(Cval); */}
        return <Card
                imgsrc ={Cval.imgsrc}
                title = {Cval.title}
                sname = {Cval.sname}
                link = {Cval.link} /> 
      } )
    }

    {/* console.log(sdata[0].sname); This code is use for single entity to access. */}
    
        {/* <Card
        imgsrc ={sdata[1].imgsrc}
        title = {sdata[1].title}
        sname = {sdata[1].sname}
        link = {sdata[1].link}
        />
        <Card
        imgsrc ={sdata[2].imgsrc}
        title = {sdata[2].title}
        sname = {sdata[2].sname}
        link = {sdata[2].link}
        />
        <Card
        imgsrc ={sdata[3].imgsrc}
        title = {sdata[3].title}
        sname = {sdata[3].sname}
        link = {sdata[3].link}
        />
        <Card
        imgsrc ={sdata[4].imgsrc}
        title = {sdata[4].title}
        sname = {sdata[4].sname}
        link = {sdata[4].link}
    /> */}
  

  </> ) 

}
export default App