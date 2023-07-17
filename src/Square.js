import React ,{useEffect} from 'react';
import styled from 'styled-components';
import style from './style.module.css'
const SquareBtn = styled.button`
width:99px;
height:99px;
display:flex;
justify-content:center;
align-items:center;
font-size:24px;
font-weight:bold;
color:black;
border-radius:50%;
border:none;

`
let nextSquares=[];
function Square({  value, winner, index,handlePlay,currentSquares,xIsNext,computerChoice}) {
    function clickHandler(i,type='user') {
         nextSquares=currentSquares.slice();
        
        if (nextSquares[i] || winner) return;
        xIsNext ?
        nextSquares[i] = 'X'
        :
        nextSquares[i] = 'O';
        handlePlay(nextSquares,i,type)
    }
    
    useEffect(()=>{
        let cm = Math.floor(Math.random() * computerChoice.length);
        xIsNext && setTimeout(() => {
            clickHandler(computerChoice[cm]!==4 && !nextSquares[4] ? 4 : computerChoice[cm],'computer');
            
        }, 1000);
        
    })
    return (
        <SquareBtn className={`${(winner && (winner[1][0] === index || winner[1][1] === index || winner[1][2] === index)) && (style.green)
            } ${winner && style.noclick}`} onClick={()=>clickHandler(index,'user')} >{value}</SquareBtn>

    )
}

export default Square;