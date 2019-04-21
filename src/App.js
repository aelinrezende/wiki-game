import React, { Component } from 'react';
import './App.css';
import * as Pages from './Pages'
import Game from './Game'
import PlayerList from './PlayerList'
import RegisterPlayers from './RegisterPlayers'

class App extends Component {
  state = {
    actualPage: 'register-players',
    pages: [],
    players: [],
  }

  added = (state) => {
    this.setState(({
      actualPage: state
    }))
     console.log(this.state.players)
  }

  componentDidMount() {
    this.setState({ pages: Pages.pages });
  }

  createPlayer(player) {
    this.setState(({
      players: player
    }))
  }

  render() {
    return (
      <div className="app">
      {this.state.actualPage === 'register-players' &&
        <RegisterPlayers
          onAddPlayer={(player) => {
            this.createPlayer(player)
          }}
          handleState={this.added}
        />
      }
      {this.state.actualPage === 'game' &&
        <PlayerList
          players={this.state.players}
          actualPage={this.state.actualPage}
        />
      }
      {this.state.actualPage === 'game' &&
        <Game
          pages={this.state.pages}
        />
      }
      <footer>Desenvolvido por @deiny ® | Cartas: {Pages.pages.length} de 1.002.000+ | Wi-ki-oh@beta1.0.0</footer>
      </div>
    )
  }
}

export default App;
