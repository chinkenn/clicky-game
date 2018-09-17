import React from "react";

const Message = props => {
    if(props.correct === false) {
        return <h1 className="navbar-brand">"You guessed incorrectly!</h1>
    }
    if (props.correct === true) {
        return <h1 className="navbar-brand">"You guessed correctly!</h1>
    }
}
{/* <h1 className="title">{props.correct}</h1>; */}

export default Message;
