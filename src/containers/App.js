import React , { useEffect, useState } from 'react';
import Search from '../components/searchBox';
import CardList  from '../components/cardList';
import './App.css';

// class App extends Component{
//     constructor(){
//         super()
//         this.state= {
//             robots: [],
//             searchField: ''
//         }
//     }

//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(user => this.setState({ robots : user }))
//     }

//     onSearchChange = (event) => {
//         this.setState({ searchField : event.target.value });
//     }

//     render() {
//         const { robots , searchField } = this.state;
//         const filtered = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchField.toLowerCase());
//         })
//         return !filtered ? 
//         <h1>Loading</h1> : 
//         (
//             <div>
//                 
//             </div>
//         )
//     }
// }



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