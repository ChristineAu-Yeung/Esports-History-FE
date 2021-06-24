import React, { useState } from "react";
import SummonerRift from '../imgs/Summoners_rift_icon.png';
import middle from '../imgs/Middle_icon.png';
import top from '../imgs/Top_icon.png';
import bottom from '../imgs/Bottom_icon.png';
import support from '../imgs/Support_icon.png';
import jungle from '../imgs/Jungle_icon.png';
import fill from '../imgs/Fill_icon.png';
import HowlingAbyss from '../imgs/Howling_abyss_icon.png';

function Card(props) {

	const gameMode = {
		'ARAM': HowlingAbyss,
		'CLASSIC': SummonerRift,
		'ONEFORALL': SummonerRift,
		'NEXUSBLITZ': SummonerRift
	}

	const gameRole = {
		'MIDDLE': middle,
		'TOP': top,
		'BOTTOM': bottom,
		'SUPPORT': support,
		'JUNGLE': jungle,
		'DUO_SUPPORT': support,
		'DUO_CARRY': bottom,
		'NONE': fill,
		'DUO': fill
	}

	return (
		<div className={`Card ${props.data.winLose ? 'gameWin' : 'gameLose'}`}>
			<div>
				<img className={'lane-icon'} src={`http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${props.data.champInfo}`} alt="champ-icon" />
				<div className={'kda'}>{` ${props.data.kills} / `} <span className='deaths-font'>{props.data.deaths}</span> {` / ${props.data.assists}`}</div>
				<img className={'lane-icon'} src={gameMode[props.data.gameMode]} alt="lane" />
				<img className={'lane-icon'} src={props.data.gameMode !== 'ARAM' ? gameRole[props.data.lane] : gameRole['NONE']} alt="role" />
			</div>
		</div>
	)
}

export default Card;