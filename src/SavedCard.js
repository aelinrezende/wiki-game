import React, { Component } from 'react';
import LongDescriptionSaved from './LongDescriptionSaved'
import noImage from './icons/wc.jpg'
import $ from 'jquery';

class SavedCard extends Component {
	state = {
		card: this.props.card
	}
	render() {
		const { card, onRemoveSavedCard } = this.props

		const onError = (src) => {
			let allImgs = $('img')
			let emptyIMG;
			console.log(allImgs)

			for (let i = 0; i < allImgs.length; i++) {
				if (allImgs[i].src === src) {
					emptyIMG = allImgs[i]
				}
			}

			$(emptyIMG).attr("src", noImage);
		}

		return (
			<div className="save-slot">
				<div className="saved-card">
					<div className="saved-card-img-container">
						<img src={card.img} onError={() => onError(card.img)} alt=''/>
						<button className="btn" onClick={() => onRemoveSavedCard(card)}>USAR</button>
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