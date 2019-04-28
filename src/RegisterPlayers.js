import React, { Component } from 'react';
import serializeForm from 'form-serialize'

class RegisterPlayers extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const values = serializeForm(e.target, {hash: true })

		const register = (value) => {
			this.props.onAddPlayer(value)
			this.props.handleState('game')
		}

		if (this.props.onAddPlayer) {

			if (typeof(values.name) === 'string') {
				const newValues = [values]

				for (let i = 0; i < newValues.length; i++) {
					newValues[i].id = `Player${i}`
				}

				register(newValues)

			} else {
				const newValues = values.name.map((name) => {
					name = {name: name, points: 0}
					return name
				})

				for (let i = 0; i < newValues.length; i++) {
					newValues[i].id = `Player${i}`
				}

				register(newValues)
			}

		}
	}
	render() {
		return (
			<section className="player-info-section">
				<div className="player-info-section-con">
					<form onSubmit={this.handleSubmit} className="add-player-form">
						<div className="add-player">
							<input type="text" name="name" placeholder="Name"/>
							<input type="text" name="name" placeholder="Name"/>
							<input type="text" name="name" placeholder="Name"/>
							<input type="text" name="name" placeholder="Name"/>
							<input type="text" name="name" placeholder="Name"/>
							<button>Adicionar jogador</button>
							<span>Devido a alguns erros, que ainda serão resolvidos,  o jogo funciona com no minimo dois jogadores.</span>
						</div>
					</form>
				</div>
			</section>
		)
	}
}

export default RegisterPlayers;