class Machine extends React.Component {
	render() {
		let slot1 = this.props.s1;
		let slot2 = this.props.s2;
		let slot3 = this.props.s3;
		return (
			<div>
				<p>Welcome to the Slots!</p>
				<h2>
					{slot1} - {slot2} - {slot3}
				</h2>
			</div>
		);
	}
}

// ReactDOM.render(<Machine />, document.getElementById('root'));
