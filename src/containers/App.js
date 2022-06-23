import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

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
                        <ErrorBoundry>
                            <CardList Robot={filteredRobot}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}
export default App;