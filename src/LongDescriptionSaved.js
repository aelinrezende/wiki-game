import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class LongDescriptionSaved extends Component {
	state = {
		show: false
	}
	render() {
		const { card } = this.props

		let info = `Rating: ${card.rating} Overall: ${card.overall} Descrição: ${card.longDescription}`

		return (
			<div className="saved-container-btn-long">
				<button className='btn saved-link-to-long-description' onClick={() => this.setState({ show: true })}>DESCRIÇÃO</button>
				<SweetAlert
					show={this.state.show}
					title={card.title}
					text={info}
					onConfirm={() => this.setState({ show: false })}
				/>
			</div>
		)
	}
}

export default LongDescriptionSaved;