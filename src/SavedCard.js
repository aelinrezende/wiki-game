import React, { Component } from 'react';
import LongDescriptionSaved from './LongDescriptionSaved'


class SavedCard extends Component {
	state = {
		card: this.props.card
	}
	render() {
		const { card, onRemoveSavedCard } = this.props

		return (
			<div className="save-slot">
				<div className="saved-card">
					<div className="saved-card-img-container">
						<img src={card.img} alt=''/>
						<button className="btn" onClick={() => onRemoveSavedCard(card)}>X</button>
					</div>
					<LongDescriptionSaved
						card={card}
					/>
				</div>
			</div>
		)
	}
}

export default SavedCard;