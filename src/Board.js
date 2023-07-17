import React from 'react';
import styled from 'styled-components';
import Square from './Square';
const BoardContainer = styled.div`
width:300px;
height:300px;
display:flex;
flex-wrap:wrap;
`
function Board({ squares,winner,xIsNext,computerChoice,handlePlay }) {

    function createSquare(squares) {

        return squares.map((element, index) => {

            return <Square 
            winner={winner} 
            key={index} 
            index={index}  
            value={element}
            currentSquares={squares}
            computerChoice={computerChoice}
            xIsNext={xIsNext}
            handlePlay={handlePlay}
            />
       
        })
    }
    
    
    return (
        
        <BoardContainer>
            {createSquare(squares)}
        </BoardContainer>  
   
    );
}

export default Board;