import React from "react";

function Card (porps){
    return (
        <div className="cards">
            <div className="card">
                <img src={porps.imgsrc} alt="my pic" className="card__img" />
                <div className="card__info">
                    <span className="card__category"> {porps.title} </span>
                    <h3 className="card__title"> {porps.sname}</h3>
                    <a href={porps.link} target=" "/>
                    <button> Watch Now</button>
                </div> 
            </div>
       </div>
    )
}

export default Card