import MenuLogin from "./Menu/MenuLogin";
import Menu from "./Menu/Menu";
import "./../scss/_Navigation.scss"
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
