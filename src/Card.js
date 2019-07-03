import React, { Component } from 'react';
import LongDescription from './LongDescription'
import * as Pages from './Pages'
import serializeForm from 'form-serialize'
import SavedCard from './SavedCard'
import noImage from './icons/wc.jpg'
import savedImage from './icons/ok.png'
import $ from 'jquery';
import * as AllCardsInGame from './Pages';

class Card extends Component {
	state = {
		deck: this.props.deck,
		lastDeck: [],
		show: false,
		savedCard: {
			title:'Nenhuma carta adicionada',
			img: savedImage,
			longDescription: 'Adicione uma carta.',
			rating: 'N.A',
			overall: 'N.A',
			id: 'none'
		}
	}

	componentDidMount() {
    	this.setState({ lastDeck: this.state.deck });
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
		} else {
			alert('Numero minimo de cartas atingido.')
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
			let mySaved = [savedCard];
			let fullDeck = Pages.pages


			fullDeck = fullDeck.filter( ( el ) => !mySaved.includes( el ) );

			console.log(mySaved, savedCard, fullDeck)

			this.setState(({
		    	deck: shuffle(fullDeck).slice(Math.max(fullDeck.length - 10, 1))
		    }))
		}

		const addCard = (e) => {
			e.preventDefault()
			if (deck.length <= 19) {
				let mySaved = [savedCard];
				let rest, finalDeck
				let theDeck = []

				rest = AllCardsInGame.pages.filter( ( el ) => !deck.includes( el ) );

				let cards = shuffle(rest).slice(Math.max(rest.length - 1, 1))

				for (let i = 0; i < cards.length; i++) {
					finalDeck = deck
					finalDeck.push(cards[i]);
				}

				finalDeck.push(savedCard)

				for (let i = 0; i < finalDeck.length; i++) {
					if (finalDeck[i].id !== savedCard.id) {
						theDeck.push(finalDeck[i])
					}
				}
				console.log(theDeck)
				this.setState(({
			    	deck: theDeck
			    }))
			} else {
				alert('Voce atingiu o limite maximo de cartas')
			}

		}

		const saveCard = (card) => {
			let fullDeck = [];

			if (this.state.deck.length > 5) {
				if (card === savedCard) {
					alert('Essa mesma carta ja foi adicionada.')

				} else {
					if (savedCard.id !== "none") {
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

			} else {
				//eslint-disable-next-line
				var answer = confirm("Você ficará com 4 cartas, ou seja, tem menos chances de vencer a rodada. Deseja prosseguir?")
				if (answer) {
				    if (savedCard.rating !== "N.A") {
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
			}
		}

		const saveToDeck = (card) => {
			let savedCardActual = {
				title:'Nenhuma carta adicionada',
				img: savedImage,
				longDescription: 'Adicione uma carta.',
				rating: 'N.A',
				overall: 'N.A',
				id: 'none'
			}
			let isEqual = false;
			let myDeck = [];
			for (let i = 0; i < deck.length; i++) {
				if (deck[i] !== card) {
					myDeck.push(deck[i]);
				}
				if (myDeck.length === deck.length) {
					isEqual = true;
				}
			}

			if (card.id !== 'none') {
				let fullDeck = deck;
				if (isEqual === true) {
					fullDeck.push(card)
					this.setState(({
						savedCard: savedCardActual,
						deck: fullDeck,

					}))
				} else {
					alert('Esta carta já existe no seu Deck.')
				}
			} else {
				alert('Nenhuma carta adicionada')
			}
		}

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
			<div className="full-container">
				<ul className='slots'>
					{deck.map((card) => (
						<li className='slot' key={card.id}>
							<div className='card'>
								<div className='image-container'>
									<img src={card.img} onError={() => onError(card.img)} alt=''/>
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
							<button className="btn-game">Puxar Carta</button>
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