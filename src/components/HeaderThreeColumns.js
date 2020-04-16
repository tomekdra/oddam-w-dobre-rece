import React from "react";
import "./../scss/_HeaderThreeColumn.scss";

const HeaderThreeColumns = () => {

    return (
        <div className={"wrapper three-columns-bg"}>
            <div className={"row"}>
                <div className={"col"}>
                    <h3>10</h3>
                    <h4>ODDANYCH WORKÓW</h4>
                </div>
                <div className={"col"}>
                    <h3>7</h3>
                    <h4>WSPARTYCH ORGANIZACJI</h4>
                </div>
                <div className={"col"}>
                    <h3>5</h3>
                    <h4>ZORGANIZOWANYCH ZBIÓREK</h4>
                </div>

            </div>
        </div>
    )
}

export default HeaderThreeColumns;