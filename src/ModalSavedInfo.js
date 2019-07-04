import React, { Component } from 'react';

class ModalSavedInfo extends Component {
	render() {
		const { card } = this.props

		let info = `Rating: ${card.rating} | Overall: ${card.overall}`

		return (
			<div className="sweet-alert-infos">
				<span>{info}</span>
				<br/><br/>
				<p>Descrição: {card.longDescription}</p>
			</div>
		)
	}
}

export default ModalSavedInfo;