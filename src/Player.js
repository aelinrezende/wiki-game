import React, { Component } from 'react';
import plus from './add.png';

class Player extends Component {
	render() {
		const { players } = this.props

		return (
			<ul>
				<li>
				<span></span>
					<div>
						<button>
							<img src="" aly="Botão menos"/>
						</button>
							<span></span>
						<button>
							<img src="" aly="Botão mais"/>
						</button>
					</div>
				</li>
			</ul>
		)
	}
}

export default Player;