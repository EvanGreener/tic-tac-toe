import './App.css'
import React, { Component } from 'react'
import Board from './components/board'
import 'bootstrap/dist/css/bootstrap.min.css'
import Game from './game-modules/game'

class App extends Component {
    constructor() {
        super()
        this.state = {
            board: [
                { id: 0, value: '', isTaken: false },
                { id: 1, value: '', isTaken: false },
                { id: 2, value: '', isTaken: false },
                { id: 3, value: '', isTaken: false },
                { id: 4, value: '', isTaken: false },
                { id: 5, value: '', isTaken: false },
                { id: 6, value: '', isTaken: false },
                { id: 7, value: '', isTaken: false },
                { id: 8, value: '', isTaken: false },
            ],
        }
        this.player = 'X'
        this.postGameOverlay = <div key={77}></div>
        this.game = new Game(this.state.board)
    }

    render() {
        const { board } = this.state
        return (
            <React.Fragment>
                {this.postGameOverlay}
                <main className="container" style={{ paddingTop: 20 }}>
                    <span className="whos-turn">
                        It's <strong>{this.player}</strong>'s turn
                    </span>
                    <Board
                        board={board}
                        displayResult={this.displayResult}
                        onClick={this.handleClick}
                    />
                </main>
            </React.Fragment>
        )
    }

    handleClick = id => {
        const { board } = this.state

        const newBoard = board.map(box => {
            if (box.id === id) {
                box.value = this.player
                box.isTaken = true

                const winner = this.game.winner()
                this.postGameOverlay =
                    winner === 'X' ? (
                        this.displayResult('won!')
                    ) : winner === 'O' ? (
                        this.displayResult('lost')
                    ) : (
                        <div key={77}></div>
                    )

                this.player = box.value === 'X' ? 'O' : 'X'
            }
        })

        this.setState(newBoard)
    }

    displayResult(result) {
        const postGameText = `You ${result}`
        return (
            <div key={77} className="post-game-overlay">
                {postGameText}
            </div>
        )
    }
}

export default App
