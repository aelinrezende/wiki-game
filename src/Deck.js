import React, { Component } from 'react';
import Card from './Card'
import noImage from './icons/wc.jpg'

class Deck extends Component {
	state = {
		deck: this.props.deck
	}

	shuffle = (array) => {
		let currentIndex = array.length, temporaryValue, randomIndex;
		while (currentIndex !== 0) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		};
		return array;
	}

	render() {
		const { deck } = this.state

		let fullDeck = deck.map(function(page) {
			if (page.overall === 'COMUM') {
				page.color = '#fff'
				page.img = noImage
			} else if (page.overall === 'RARA') {
				page.color = '#fcd40c'
				page.img = noImage
			} else if (page.overall === 'SUPER RARA') {
				page.color = '#0cdcfc'
			} else if (page.overall === 'PogU') {
				page.color = '#ba2121'
				page.img = noImage
			}

			return page
		})


		fullDeck = this.shuffle(deck).slice(Math.max(deck.length - 10, 1))

		return (
			<section className='duel-disk'>
				<Card
					deck={fullDeck}
				/>
			</section>
		)
	}
}

export default Deck;
