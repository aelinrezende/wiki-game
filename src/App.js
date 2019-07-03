import React, { Component } from 'react';
import './App.css';
import * as Pages from './Pages'
import Game from './Game'
import PlayerList from './PlayerList'
import RegisterPlayers from './RegisterPlayers'
import Avisos from './Avisos'

class App extends Component {
  state = {
    actualPage: 'avisos',
    pages: [],
    players: [],
  }

  added = (state) => {
    this.setState(({
      actualPage: state
    }))
     // console.log(this.state.players)
  }

  componentDidMount() {
    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    for (let i = 0; i < Pages.pages.length; i++) {
      Pages.pages[i].id = uuidv4();
    }
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
      {this.state.actualPage === 'avisos' &&
        <Avisos
          handleState={this.added}
        />
      }
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
      {this.state.actualPage === 'register-players' &&
        <footer>Desenvolvido por @deiny ® | Cartas: {Pages.pages.length} de 1.002.000+ | Wi-ki-oh@beta1.0.0</footer>
      }
      </div>
    )
  }
}

export default App;
