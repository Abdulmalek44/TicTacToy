import React from 'react'
import Box from '../Box/Box'
import './Board.css'

function Board({ board, onClick }) {
    return (
        <div className='board-box'>
            {
                board.map((value, indx) => {
                    return <Box
                        key={indx}
                        value={value}
                        onClick={() => value === null && onClick(indx)}
                    />
                })
            }

        </div>
    )
}

export default Board