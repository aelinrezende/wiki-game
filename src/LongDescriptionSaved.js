import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { renderToStaticMarkup } from 'react-dom/server';
import ModalSavedInfo from './ModalSavedInfo';

class LongDescriptionSaved extends Component {
	state = {
		show: false
	}
	render() {
		const { card } = this.props

		return (
			<div className="saved-container-btn-long">
				<button className='btn saved-link-to-long-description' onClick={() => this.setState({ show: true })}>DESCRIÇÃO</button>
				<SweetAlert
					show={this.state.show}
					title={card.title}
					html
					text={renderToStaticMarkup(<ModalSavedInfo card={card}/>)}
					onConfirm={() => this.setState({ show: false })}
				/>
			</div>
		)
	}
}

export default LongDescriptionSaved;