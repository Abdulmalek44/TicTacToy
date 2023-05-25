import React, { useState } from 'react'
import Board from '../Board/Board'
import Scores from '../Scores/Scores';
import ResetButton from '../ResetButton/ResetButton';
import './TicTacToyGame.css'

function TicTacToyGame() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xPlaying, setXPlaying] = useState(true)
    const [score, setscore] = useState({ xScore: 0, oScore: 0 })
    const [gameOver, setGameOver] = useState(false)


    const clackBoxHandler = (boxIndx) => {
        const updateBoard = board.map((value, indx) => {
            if (boxIndx === indx) {
                return xPlaying === true ? 'X' : 'O'
            }
            else {
                return value
            }
        })
        const winner = checkWinner(updateBoard);
        if (winner) {
            if (winner === 'O') {
                setscore({ ...score, oScore: score.oScore + 1 })
            }
            else {
                setscore({ ...score, xScore: score.xScore + 1 })
            }
        }
        console.log(score)
        setBoard(updateBoard);
        setXPlaying(!xPlaying);
    }

    const checkWinner = (board) => {
        for (let i = 0; i < winningConditions.length; i++) {
            const [x, y, z] = winningConditions[i];
            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                setGameOver(true)
                return board[x]
            }
        }
    }

    const resetBoard = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null));

    }
    return (
        <div className='main-contain'>
            <Scores score={score} xplaying={xPlaying} />
            <Board board={board} onClick={gameOver ? resetBoard : clackBoxHandler} />
            <ResetButton resetBoard={resetBoard} />
        </div>
    )
}

export default TicTacToyGame
