import React, { useState,useEffect } from 'react';
import Board from './Board';
import History from './History';
import styled from 'styled-components';
import style from './style.module.css';
const Container = styled.div`
width:430px;
height:300px;
background:white;
border:1px solid rgba(240,240,200,.5);
display:flex;
`

const StatusContainer = styled.div`
width:100%;
background:rgba(240,240,200,.5);
font-weight:bold;
font-size:24px;
color:green;
`
const allChoice=[0,1,2,3,4,5,6,7,8]
function Game(props) {
    const [computerChoice, setComputerChoice] = useState([]);
    const [userChoice, setUserChoice] = useState([]);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    let currentSquares = history[currentMove];
    let xIsNext = currentMove % 2;


//
useEffect(()=>{
        let cm;
        cm = Math.floor(Math.random() * computerChoice.length);
        xIsNext && setTimeout(() => {
            
            clickHandler(computerChoice[cm],'computer');

        }, 1000);
    })
    function clickHandler(i,type='user') {
        
        const nextSquares = currentSquares.slice();
        if (nextSquares[i] || winner) return;
        xIsNext ?
            nextSquares[i] = 'X'
            :
            nextSquares[i] = 'O';
            handlePlay(nextSquares,i,type)
    }



    function handlePlay(nextSquares, i,type) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        xIsNext = currentMove % 2;
        //Normal player choices are stored in an array
       if(type==='user') setUserChoice([...userChoice, i]);
        // "com" is The squares that the computer player has the right to choose
        const com = allChoice.filter(e => {
            return !userChoice.includes(e)
        })
        setComputerChoice([...com])
        // console.log(com)
}
  
    let status = '';

    const winner = calculateWinner(currentSquares);

    if (winner) {
        status = winner[0] + ' win!';
    }
    else
        if (history.length === 10 && !winner) {
            status = 'draw'
        }
        else {
            status = 'turn :' + (!xIsNext ? ' O' : ' X');

        }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],

        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                const data = [
                    squares[a],
                    [a, b, c]
                ];
                return data;
            }
        }
    }


    ///
    
    return (
        <div className={style.board}>
            <Container>
                <Board winner={calculateWinner(currentSquares)} clickHandler={clickHandler} squares={currentSquares} />
                <History history={history} setCurrentMove={setCurrentMove} xIsNext={xIsNext} currentMove={currentMove} />
            </Container>
            <StatusContainer>{status}</StatusContainer>
        </div>
    );
}

export default Game;