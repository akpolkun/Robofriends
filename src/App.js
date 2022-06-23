import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            Robot: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({Robot: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }

    render() {
        const {Robot, searchField} = this.state;
        const filteredRobot = Robot.filter(Robots => {
            return Robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !Robot.length ? 
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox SearchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList Robot={filteredRobot}/>
                    </Scroll>
                </div>
            );
    }
}
export default App;