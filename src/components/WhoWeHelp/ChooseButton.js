import React from "react";

const ChooseButton = ({text, choice, isActive, onClick}) => {

    let activeStyle = {};
    if(isActive) {
        activeStyle = {
            border: "1px solid red"
        }
    }

    return (
        <button className={"button-big"} onClick={() => onClick(choice)} style={activeStyle}>{text}</button>
    )
}
export default ChooseButton;
