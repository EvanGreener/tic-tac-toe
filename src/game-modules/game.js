export default class Game {
    //Passed value which is reference to board obj
    constructor(board) {
        this.board = board
    }

    winner() {
        const board = [...this.board]
        //3 top boxes
        for (let i = 0; i < 3; i++) {
            const value = board[i].value

            if (value === 'X' || value === 'O') {
                //horizontal
                let occurences = 1
                for (let j = 1; value === board[i + j].value; j++) {
                    occurences++
                }
                if (occurences === 3) {
                    return value
                }
                //diagonal
                occurences = 1
                for (let j = 4; value === board[j]?.value; j += 4) {
                    occurences++
                }
                if (occurences === 3) {
                    return value
                }
                //vertical
                occurences = 1
                for (let j = 3; value === board[j]?.value; j += 3) {
                    occurences++
                }
                if (occurences === 3) {
                    return value
                }
                //other diagonal
                occurences = 1
                for (let j = 4; value === board[j]?.value; j -= 2) {
                    occurences++
                }
                if (occurences === 3) {
                    return value
                }
            }
        }
        //2 left side boxes
        for (let i = 1; i < 3; i++) {
            let occurences = 1
            const value = board[i * 3].value

            //horizontal
            for (let j = 1; value === board[i * 3 + j]?.value; j++) {
                occurences++
            }
            if (occurences === 3) {
                return value
            }
        }

        return ''
    }
}
