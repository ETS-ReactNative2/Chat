import React from 'react';



function Square(props) {
    return (

        <button className={`square ${props.calculateWinner(props.squares) ===  props.value && props.value != null ? "winner":""}`} data-pro={props.value} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;