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
							<input type="text" name="name" placeholder="Nome"/>
							<input type="text" name="name" placeholder="Nome"/>
							<input type="text" name="name" placeholder="Nome"/>
							<input type="text" name="name" placeholder="Nome"/>
							<input type="text" name="name" placeholder="Nome"/>
							<button>Iniciar jogo</button>
							<span>Caso você confie na capacidade cognitiva dos seus amigos de lembrarem suas respectivas pontuações, você pode adicionar apenas o seu nome. Caso contrario, adicione o nome de cada participante. Além disso, seus amigos podem "esquecer" a pontuação e adicionar mais pontos do que ele realmente possuem.</span>
						</div>
					</form>
				</div>
			</section>
		)
	}
}

export default RegisterPlayers;