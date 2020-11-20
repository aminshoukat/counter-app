import React, { useState, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';
import "./App.css";

const App = () => {
	const [initialCounters, setInitialCounters] = useState([]);
	const [counters, setCounters] = useState(
		[
			{key: 1, value: 0},
			{key: 2, value: 1},
			{key: 3, value: 2},
			{key: 4, value: 3}
		]
	);

	useEffect(() => {
		const initialCounters = counters;
		setInitialCounters(initialCounters);
	}, []);
	

	const handleIncrement = counter => {
		const cloneCounters = [...counters];
		const index = cloneCounters.indexOf(counter);
		cloneCounters[index] = {...cloneCounters[index]};
		cloneCounters[index].value++;
		setCounters(cloneCounters);
	}

	const handleDecrement = counter => {
		const cloneCounters = [...counters];
		const index = cloneCounters.indexOf(counter);
		cloneCounters[index] = {...cloneCounters[index]};

		if(!cloneCounters[index].value < 1)
			cloneCounters[index].value--;

		setCounters(cloneCounters);
	}

	const handleDelete = counter => {
		const cloneCounters = counters.filter(c => c !== counter);

		if(!cloneCounters.length < 1)
			setCounters(cloneCounters);
	}

	const handleReset = () => {
		setCounters(initialCounters);
	}

	return ( 
		<div className="App">
			<button className="btn btn-primary" onClick={() => handleReset()}>Reset</button>
			{counters.map(counter => 
				<Counter key={counter.key} counter={counter} handleIncrement={ () => handleIncrement(counter)}  handleDecrement={ () => handleDecrement(counter)}  handleDelete={ () => handleDelete(counter)}  />
			)}

		</div>
	);
}

export default App;
