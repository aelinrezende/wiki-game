import React, { Component } from 'react';
import Deck from './Deck'

class Game extends Component {
	render() {
		const { pages } = this.props

		return (
			<div className='container'>
					<main className='game-content'>
						<Deck
							pages={pages}
						/>
					</main>
			</div>
		)
	}
}

export default Game;