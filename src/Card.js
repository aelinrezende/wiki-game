import React, { Component } from 'react';
import LongDescription from './LongDescription'
import * as Pages from './Pages'
import serializeForm from 'form-serialize'
import SavedCard from './SavedCard'
import noImage from './icons/ok.png'


class Card extends Component {
	state = {
		deck: this.props.deck,
		show: false,
		savedCard: {
			title:'Nenhuma carta adicionada',
			img: noImage,
			longDescription: 'Adicione uma carta.',
			rating: 'N.A',
			overall: 'N.A'
		}
	}

	removeCard = (card) => {
		let cards = []
		if (this.state.deck.length > 5) {
			for (let i = 0; i < this.state.deck.length; i++) {
				if (this.state.deck[i] !== card) {
					cards.push(this.state.deck[i])
				}
			}
			this.setState(({
			    deck: cards
			}))
		}
	}

	render() {
		const { deck, savedCard } = this.state

		function shuffle(array) {
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

		const shuffleAndChange = () => {
			this.setState(({
		    	deck: shuffle(Pages.pages).slice(Math.max(Pages.pages.length - 10, 1))
		    }))
		}

		const addCard = (e) => {
			e.preventDefault()
			const values = serializeForm(e.target, {hash: true})

			let newDeck = deck;

			let cards = shuffle(deck)

			let df = [{}];

			// console.log('oi', df.length)

			for (let i = 0; i < newDeck.length; i++) {
				for (let c = 0; c < cards.length; c++) {
					if (cards[c] !== newDeck[i]) {
						for (let d = 0; d < d.length; d++) {
							if (df[d] !== cards[c]) {
								console.log('oi')
								df.push(cards[c])
							}
						}
					}
				}

			}

			// console.log(df)


			cards = df.slice(Math.max(df.length - values.card, 1))

			for (let i = 0; i < cards.length; i++) {
				newDeck.push(cards[i])
			}

			// console.log(newDeck)
			this.setState(({
		    	card: newDeck
		    }))
		}

		const saveCard = (card) => {
			let fullDeck = [];

			if (savedCard.rating !== 'N.A') {
				for (let i = 0; i < deck.length; i++) {
					if (deck[i] !== card) {
						fullDeck.push(deck[i])
					}
				}
				fullDeck.push(savedCard)
				this.setState(({
					savedCard: card,
					deck: fullDeck
				}))
			} else {
				for (let i = 0; i < deck.length; i++) {
					if (deck[i] !== card) {
						fullDeck.push(deck[i])
					}
				}
				this.setState(({
					savedCard: card,
					deck: fullDeck
				}))
			}

		}

		const saveToDeck = (card) => {
			let savedCardActual = {
				title:'Nenhuma carta adicionada',
				img: noImage,
				longDescription: 'Adicione uma carta.',
				rating: 'N.A',
				overall: 'N.A'
			}
			if (card.rating !== 'N.A') {
				let fullDeck = deck;
				fullDeck.push(card)
				this.setState(({
					savedCard: savedCardActual,
					deck: fullDeck
				}))
			} else {
				alert('Nenhuma carta adicionada')
			}
		}

		return (
			<div className="full-container">
				<ul className='slots'>
					{deck.map((card) => (
						<li className='slot' key={card.title}>
							<div className='card'>
								<div className='image-container'>
									<img src={card.img} alt=''/>
									<div className="action-btns">
										<button className="btn-save" onClick={() => saveCard(card)}>Save</button>
										<button className="btn-remove" onClick={() => this.removeCard(card)}>X</button>
									</div>
								</div>
								<div className='info-container'>
									<div>
										<h1 className='page-title'>{card.title}</h1>
										<div id='scroll' className="description-cont">
											<p className='description'>{card.shortDescription}</p>
										</div>
										<div className="points">
											<span className='rating' style={{
												color: `${card.color}`
											}}>{card.rating}</span>
											<span className='overall' style={{
												color: `${card.color}`
											}}>{card.overall}</span>
										</div>
									</div>
									<div className="btns">
										<a href={card.link} target="_blank" rel='noopener noreferrer' className='btn link-to-wiki-page'>Pagina Wiki</a>
										<LongDescription
											desc={card.longDescription}
											title={card.title}
										/>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
				<section className="btn-area">
					<div className="btn-overlay">
						<form onSubmit={addCard} className="add-card">
							<input type="text" name="card"/>
							<button className="btn-game">Adicionar Cartas</button>
						</form>
						<button className="btn-game" onClick={shuffleAndChange}>Embaralhar</button>
					</div>
					<SavedCard
						card={savedCard}
						onRemoveSavedCard={saveToDeck}
					/>
				</section>
			</div>
		)
	}
}

export default Card;