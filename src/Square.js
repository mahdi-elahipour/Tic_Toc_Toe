import React from 'react';
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
function Square({ handleClick, value, winner, index}) {


    return (
        <SquareBtn className={`${(winner && (winner[1][0] === index || winner[1][1] === index || winner[1][2] === index)) && (style.green)
            } ${winner && style.noclick}`} onClick={() => handleClick(index)} >{value}</SquareBtn>

    )
}

export default Square;