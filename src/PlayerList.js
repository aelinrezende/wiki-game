import React, { Component } from 'react';

class PlayerList extends Component {
	state = {
		allPlayers: this.props.players,
		pageState: this.props.actualPage
	}

	changePoints = (id, point) => {
		let { allPlayers } = this.state
		for (let i = 0; i < allPlayers.length; i++) {
			if (allPlayers[i].id === id) {
				var stateCopy = Object.assign({}, this.state);
				stateCopy.allPlayers[i].points += point;
				this.setState(stateCopy);
			}
		}
	}

	render() {
		let { allPlayers } = this.state

		return (
			<aside className="player-list">
					<ul>
					{this.state.pageState === 'game' &&
						allPlayers.map((player) => (
							<li className="players-info" key={player.id}>
								<span>{player.name}</span>
								<div className="player-point">
									<button className="substract-points" onClick={() => this.changePoints(player.name, -1)}>
									-
									</button>
										<span className="points">{player.points}</span>
									<button className="add-points" onClick={() => this.changePoints(player.id, +1)}>
									+
									</button>
								</div>
							</li>
						))
					}
					</ul>
			</aside>
		)
	}
}

export default PlayerList;