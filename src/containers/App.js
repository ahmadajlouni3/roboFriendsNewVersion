import React , { useEffect, useState } from 'react';
import Search from '../components/searchBox';
import CardList  from '../components/cardList';
import './App.css';

const App = () =>{
    const [robots , setRobots] = useState([]);
    const [search , setSearch] = useState('');

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setRobots(data))
    } , [setRobots])

    const onSearchChange = (e) => setSearch(e.target.value)

    const filtered = robots.filter(user => {
        return( 
        user.name.toLowerCase()
        .includes(search.toLowerCase())
        )
    })

    return (
        <div>
          <h1>Cat Friends</h1>
          <Search searchChange={onSearchChange}/>
          <CardList cats={filtered}/>
        </div>
    )
}

export default App;