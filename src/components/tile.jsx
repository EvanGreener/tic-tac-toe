import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Tile extends Component {
    state = {}
    render() {
        const { onClick, cssClass, tile } = this.props
        return (
            <React.Fragment>
                <button
                    onClick={() => onClick(tile.id)}
                    className={cssClass}
                    disabled={tile.isTaken}
                >
                    {tile.value}
                </button>
            </React.Fragment>
        )
    }
}

export default Tile
