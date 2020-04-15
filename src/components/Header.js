import React from "react";
import MenuLogin from "./MenuLogin";
import Menu from "./Menu";
import "./../scss/_header.scss";

const Header = () => {

    return (
        <>
            <div className={'background-home'} />
            <MenuLogin/>
            <Menu/>
        </>
    )
}

export default Header