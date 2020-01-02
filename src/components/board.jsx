import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tile from './tile'

class Board extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container board">{this.createTable()}</div>
            </React.Fragment>
        )
    }

    createTable = () => {
        let tiles = []
        for (let i = 0; i < 3; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                let className =
                    (i + j) % 2 === 0 ? 'box-light-blue' : 'box-default'
                const { id } = this.props.board[i * 3 + j]
                row.push(
                    <Tile
                        key={id}
                        cssClass={'box ' + className}
                        onClick={this.props.onClick}
                        tile={this.props.board[i * 3 + j]}
                    />,
                )
            }
            tiles.push(
                <div key={i} className="row">
                    {row}
                </div>,
            )
        }
        return tiles
    }
}

export default Board
