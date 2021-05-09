import React, { useState } from "react";

function Card(props) {
    return (
        <div className={`Card ${props.data.winLose ? 'gameWin':'gameLose'}`}>
            <div>
                {props.data.kills}
                {props.data.deaths}
                {props.data.assists}
                {props.data.gameMode}
                {props.data.lane}
                {props.data.winLose}
            </div>
        </div>
    )
}

export default Card;