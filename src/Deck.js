import React, { Component } from 'react';
import Card from './Card'

class Deck extends Component {
	render() {
		const { pages } = this.props

		return (
			<section className='container-deck'>
				<div className='wrapper'>
					<div className='duel-disk'>
						<Card
							pages={pages}
						/>
					</div>
				</div>
			</section>
		)
	}
}

export default Deck;
