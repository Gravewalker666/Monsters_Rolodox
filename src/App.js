import React from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends React.Component{
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    handleChange = e => {
        this.setState({searchField: e.target.value});
        console.log(this);
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <img src={`https://i.imgur.com/RWUDUUT.png`} alt='Mosters'/>
                <SearchBox handleChange={this.handleChange} placeholder={'search monsters'}/>
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default App;
