import React from "react";

const ChooseButton = ({text, choice, onClick}) => {

    return (
        <button className={"button-big"} onClick={() => onClick(choice)}>{text}</button>
    )
}
export default ChooseButton;
