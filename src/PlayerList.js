import React, { Component } from 'react';

class PlayerList extends Component {
	state = {
		allPlayers: this.props.players,
		pageState: this.props.actualPage
	}

	render() {
		let { allPlayers } = this.state

		const addPoints = (name) => {
			for (let i = 0; i < allPlayers.length; i++) {
				if (allPlayers[i].name === name) {
					var stateCopy = Object.assign({}, this.state);
					stateCopy.allPlayers[i].points += 1;
					this.setState(stateCopy);
				}
			}
		}

		const removePoints = (name) => {
			for (let i = 0; i < allPlayers.length; i++) {
				if (allPlayers[i].name === name) {
					var stateCopy = Object.assign({}, this.state);
					stateCopy.allPlayers[i].points -= 1;
					this.setState(stateCopy);
				}
			}
		}

		return (
			<aside className="player-list">
				<div className="wrapper-players">
					<ul>
					{this.state.pageState === 'game' &&
						allPlayers.map((player) => (
							<li className="players-info" key={player.name}>
								<span>{player.name}</span>
								<div className="player-point">
									<button className="substract-points" onClick={() => removePoints(player.name)}>
									-
									</button>
										<span className="points">{player.points}</span>
									<button className="add-points" onClick={() => addPoints(player.name)}>
									+
									</button>
								</div>
							</li>
						))
					}
					</ul>
				</div>
			</aside>
		)
	}
}

export default PlayerList;