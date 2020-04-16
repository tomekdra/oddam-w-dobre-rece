import MenuLogin from "./Menu/MenuLogin";
import Menu from "./Menu/Menu";
import "../scss/_Menu.scss"
import React from "react";

const Navigation = () => {

    return (
    <div className={"navigation"}>
         <MenuLogin/>
         <Menu/>
     </div>
    )
}

export default Navigation;
