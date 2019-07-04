import React, { Component } from 'react';
import noImage from './icons/wc-2.jpg'

class Avisos extends Component {
	state = {
		regras: [
			'Após inserir os nomes dos jogadores e clicar no botão "iniciar o jogo", você receberá dez cartas aleatórias.',
			'Com as dez cartas no seu Deck, você deverá escolher as cinco mais fortes.',
			'Agora que possui apenas cinco cartas, você deve escolher uma delas para "batalhar". Seus adversarios devem fazer o mesmo.',
			'A partir deste ponto, você e os outros jogadores devem discutir e defender a carta escolhida. O mesmo deve ser feito para as cartas restantes.',
			'O jogador que obtiver mais vitorias nesses cinco debates vence a rodada.',
			'Clicando no botão inferior a direita, será gerado um novo baralho e será iniciada uma nova rodada.',
			'O jogador (E SOMENTE ELE) que vencer uma rodada, tem direito a salvar uma carta do PRÓXIMO baralho.'
		],
		extras: [
			'Todos os jogadores têm direito a "puxar" mais DUAS cartas para o seu respectivo Deck. Gastadas essas duas "puxadas", o jogador só poderá gerar mais cartas se vencer uma rodada.',
		]
	}
	render() {
		const { regras, extras } = this.state
		return (
			<section className='regras'>
				<div className="wrapper-regras">
					<h1>COMO O JOGO FUNCIONA</h1>
					<p>Antes de nos apronfundarmos nas regras, saiba que este é um jogo multiplayer "não-online" e "não-local", ou seja, para que ele funcione "corretamente", é necessario sinceridade, ética, moral, e boa índole dos participantes. Agora LEIA as regras.</p>
					<ol>
						{regras.map((regra) => (
							<li><p>{regra}</p></li>
						))}
					</ol>
					<ol>
					<h2>EXTRA</h2>
					{extras.map((extra) => (
						<li><p>{extra}</p></li>
					))}
					</ol>
					<p>Cada carta possui dois niveis de classificação: <i><strong>rating</strong></i> e <i><strong>overall</strong></i>. Saiba que você não precisa levar em consideração os mesmos, pois para uma determinada pessoa, certa carta pode ser considerada <strong>Rara</strong>, porém, para você e seus amigos, não.</p>
					<p><strong>NOVAMENTE</strong>: Esse jogo depende da índole do jogador. Quem está jogando pode muito bem gerar 10 cartas e escolher as melhores, ou salvar uma carta sem ter o direito, porém isso seria muito <img src={noImage} alt=""></img> . Não seja essa pessoa.</p>
					<p><i>Regras desenvolvidas por <strong>Cellbit</strong>, <strong>Felps</strong>, <strong>Gabi</strong> e <strong>Ljoga</strong></i>.</p>
				</div>
				<button className="btn" onClick={() => this.props.handleState('register-players')}>Próximo</button>
			</section>
		)
	}
}

export default Avisos;