import React from 'react';
import Cat from './cat';
import './cardList.css';

const CardList =  ({cats})  => {
    const cards = cats.map((user , i)=>{
        return (
            <Cat 
            key={i}
            id={cats[i].id}
            name={cats[i].name}
            email={cats[i].email} />
        );
    });

    return (<div className="grid">{cards}</div>);
}


export default CardList;