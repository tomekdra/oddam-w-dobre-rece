import React from "react";
import {Link} from "react-router-dom";

const Button = ({url, text}) => {

    return (
        <Link to={url} className={"button"}>{text}</Link>
    )
}
export default Button;