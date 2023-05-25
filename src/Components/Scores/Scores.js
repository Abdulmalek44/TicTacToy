import React from 'react'
import './Scores.css'

const Scores = ({ score, xplaying }) => {
    const { xScore, oScore } = score;
    return (
        <div className='scores'>
            <span className={` score  x-score ${!xplaying && 'inactive'}`}> X - {xScore} </span>
            <span className={` score  o-score ${xplaying && 'inactive'}`}> O - {oScore} </span>
        </div>
    )
}

export default Scores
