import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import Scroll from './Scroll'



// STATE IS AN OBJECT THAT DESCRIBES YOUR APPLICATION 
// WHICH IN THIS IS THE ROBOT AND YOU CAN CHANGE THE VALUE OF IT PROPS ARE SIMPLY THINGS THAT COME OUT OF STATE

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			search: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users => this.setState({robots: users}));
	}



	onSearchChange= (event) => {
		this.setState({search: event.target.value})
		
	}


	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.search.toLowerCase());
		})
		console.log(filteredRobots);

		if (this.state.robots.length === 0){
		return <h1 className='robo'>Loading</h1>
		}else{
		
		return (
		<div className='tc'>
		<h1 className='robo'>
		ROBO FRIENDS
		</h1>
	
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<CardList robots={filteredRobots}/>
		</Scroll>
		</div>
			);
	}}

}

export default App;

