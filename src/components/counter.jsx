import { Component } from 'react';

class Counter extends Component {
	render() {
		let {counter, handleIncrement, handleDecrement, handleDelete} = this.props;
		let badgeClass = 'badge m-2 badge-' + this.setClass(counter.value);
		return(
			<div>
				<span className={badgeClass}>{ (counter.value === 0) ? 'Zero' : counter.value}</span>
				<button className="btn btn-primary m-2" onClick={handleIncrement}>+</button>
				<button className="btn btn-secondary m-2" onClick={handleDecrement}>-</button>
				<button className="btn btn-danger m-2" onClick={handleDelete}>X</button>
			</div>
		)
	}

	setClass = (value) => {
		if(value == 0)
			return 'warning';

		return 'primary';
	}
}

export default Counter;