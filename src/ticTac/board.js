import React from 'react';
import Square from "./square";



class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    renderSquare=(i)=> {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} calculateWinner = {this.props.calculateWinner} squares={this.state.squares}/>;
    }
    handleClick = (i) => {
        const squares = this.state.squares.slice();
        if (this.props.calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    clearGame = ()=>{
        this.setState({
            squares: []
        })
    }
    render() {
        const winner = this.props.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
        console.log("status", winner );

        return(
            <div>
                <div>{status}</div>
                <div className="boardRow">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="boardRow">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="boardRow">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <button className="clearGame" onClick={()=>this.clearGame()}>ClearGame</button>
            </div>
        )

    }
}

export default Board;
