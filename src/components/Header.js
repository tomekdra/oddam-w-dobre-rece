import React from "react";
import "../scss/_Header.scss";
import Button from "./elements/Button";

const Header = () => {

    return (
        <div className={"header"}>
            <div className={'background-home'} />
            <div className={"start-help-box"}>
                <div className={"start-help-content"}>
                <span className={"header-title"}>
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </span>
                <div className={"decoration"}/>
                <div className={"header-buttons"}>
                    <Button url={"/Login"} text={`ODDAJ RZECZY`} />
                    <Button url={"/Login"} text={"ZORGANIZUJ ZBIÓRKĘ"} />
                </div>

                </div>
            </div>
        </div>
    )
}

export default Header