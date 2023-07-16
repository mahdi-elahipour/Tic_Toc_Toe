import React from 'react';
import styled from 'styled-components';
const HistoryContainer = styled.div`
width:fit-content;
height:300px;
display:flex;
justify-content:flex-start;
`
const Ol=styled.ol`
width:100px;
direction:rtl;
background-color:rgba(240,240,200,.5);
margin-left:0px;
`
const JumpToBtn=styled.button`
width:100%;
padding:3px 8px;
border:none;
font-weight:bold;
margin-top:5px;
cursor:pointer;
`
function History({ history,setCurrentMove,currentMove,xIsNext }) {
    function jumpto(move){
        setCurrentMove(move)
        xIsNext=currentMove%2;
    }
    return (
        <HistoryContainer>
            <Ol>
                {
                    history.map((element,move)=>{
                        let description='';
                        if(move>0)
                        description='move #'+move;
                        else
                        description='first move';
                        return <li key={move}><JumpToBtn onClick={()=>jumpto(move)}>{description}</JumpToBtn></li>
                    })
                }
            </Ol>
        </HistoryContainer>
    );
}

export default History;