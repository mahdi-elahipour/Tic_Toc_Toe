import React from 'react';
import styled from 'styled-components';
import Game from './Game';
const GameWrapper=styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`
function App() {
    return (
        <GameWrapper>
        <Game/>
        </GameWrapper>
    );
}

export default App;