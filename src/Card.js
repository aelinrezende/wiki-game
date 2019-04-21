import React, { Component } from 'react';

class Card extends Component {
	state = {
		pages: this.props.pages
	}
	render() {
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
		const { pages } = this.state

		const allPage = pages.map(function(page) {
			if (page.overall === 'COMUM') {
				page.color = '#fff'
			} else if (page.overall === 'RARA') {
				page.color = '#fcd40c'
			} else if (page.overall === 'SUPER RARA') {
				page.color = '#0cdcfc'
			} else if (page.overall === 'PogU') {
				page.color = '#ba2121'
			}

			return page
		})

		const shuffleAndChange = () => {
			this.setState(({
		    	pages: shuffle(allPage)
		    }))
		}

		return (
			<ul className='slots'>
				{shuffle(allPage).slice(Math.max(allPage.length - 3, 1)).map((page) => (
					<li className='slot' key={page.title}>
						<div className='card'>
							<div className='image-container'>
								<img src={page.img} alt=''/>
							</div>
							<div className='info-container'>
								<div>
									<h1 className='page-title'>{page.title}</h1>
									<div id='scroll' className="description-cont">
										<p className='description'>{page.shortDescription}</p>
									</div>
									<div className="points">
										<span className='rating' style={{
											color: `${page.color}`
										}}>{page.rating}</span>
										<span className='overall' style={{
											color: `${page.color}`
										}}>{page.overall}</span>
									</div>
								</div>
								<div className="btns">
									<a href={page.link} target="_blank" rel='noopener noreferrer' className='btn link-to-wiki-page'>Pagina Wiki</a>
									<button className='btn link-to-long-description'>Descrição Longa</button>
								</div>
							</div>
						</div>
					</li>
				))}
				<button className="btn-shuffle" onClick={shuffleAndChange}>Embaralhar</button>
			</ul>
		)
	}
}

export default Card;