import React, { Component } from 'react';
import Deck from './Deck'

class Game extends Component {
	state = {
		pages: this.props.pages
	}
	render() {
		const { pages } = this.state

		return (
			<div className='container'>
				<main className='game-content'>
					<Deck
						deck={pages}
					/>
				</main>
			</div>
		)
	}
}

export default Game;