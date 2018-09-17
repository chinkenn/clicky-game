import React from "react";
import Title from "../Title";
import Message from "../Message";
import Score from "../Score"

const Nav = props => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Title>Clicky Game</Title>
                </li>
                <li className="nav-item">
                    <Message 
                        correct={props.correct}
                    />
                </li>
                <li className="nav-item">
                    <Score 
                        currentScore={props.currentScore}
                        topScore={props.topScore}
                    />
                </li>
            </ul>
        </div>
    </nav>
    )
}
export default Nav;