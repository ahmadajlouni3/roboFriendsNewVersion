import React from "react";
import './cat.css';

const Cat = ({ name  , id , email }) => {
    return(
        <div className="org_sty">
            <h2>{name}</h2>
            <img src={`https://robohash.org/${id}?set=set4&size=100x100`} alt="cat_photo" />
            <p>{email}</p>
        </div>
    )
}

export default Cat;