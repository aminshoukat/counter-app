import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import "./App.css";

class App extends Component {
	state = {
		initialCounters: [],
		counters: [
			{key: 1, value: 0},
			{key: 2, value: 1},
			{key: 3, value: 2},
			{key: 4, value: 3}
		]
	};

	componentDidMount() {
		const initialCounters = this.state.counters;
		this.setState({initialCounters});
	}

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counters[index]};
		counters[index].value++;
		this.setState({counters});
	}

	handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counters[index]};

		if(!counters[index].value < 1)
			counters[index].value--;

		this.setState({counters});
	}


	handleDelete = counter => {
		const counters = this.state.counters.filter(c => c !== counter);

		if(!counters.length < 1)
			this.setState({counters});
	}


	handleReset = () => {
		const counters = this.state.initialCounters;
		this.setState({counters: counters});
	}

	render() {
		return (
			<div className="App">
				<button className="btn btn-primary" onClick={() => this.handleReset()}>Reset</button>
				{this.state.counters.map(counter => 
					<Counter key={counter.key} counter={counter} handleIncrement={ () => this.handleIncrement(counter)}  handleDecrement={ () => this.handleDecrement(counter)}  handleDelete={ () => this.handleDelete(counter)}  />
				)}

			</div>

		);
	}
}

export default App;
