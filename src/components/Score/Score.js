import React from "react";

const Score = props => {
    return <h1 className="navbar-brand">Curent Score: {props.currentScore} | Top Score: {props.topScore}</h1>
}
{/* <h1 className="title">{props.correct}</h1>; */}

export default Score;
