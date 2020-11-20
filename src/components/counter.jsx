const  Counter = ({counter, handleIncrement, handleDecrement, handleDelete}) => {
	
	let setClass = (value) => {
		if(value === 0)
			return 'warning';

		return 'primary';
	}

	let badgeClass = 'badge m-2 badge-' + setClass(counter.value);

	return(
		<div>
			<span className={badgeClass}>{ (counter.value === 0) ? 'Zero' : counter.value}</span>
			<button className="btn btn-primary m-2" onClick={handleIncrement}>+</button>
			<button className="btn btn-secondary m-2" onClick={handleDecrement}>-</button>
			<button className="btn btn-danger m-2" onClick={handleDelete}>X</button>
		</div>
	)
}


export default Counter;