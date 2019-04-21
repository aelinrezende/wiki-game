import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class LongDescription extends Component {
	state = {
		show: false
	}
	render() {
		const { desc, title } = this.props

		return (
			<div className="container-btn-long">
				<button className='btn link-to-long-description' onClick={() => this.setState({ show: true })}>Descrição Longa</button>
				<SweetAlert
					show={this.state.show}
					title={title}
					text={desc}
					onConfirm={() => this.setState({ show: false })}
				/>
			</div>
		)
	}
}

export default LongDescription;