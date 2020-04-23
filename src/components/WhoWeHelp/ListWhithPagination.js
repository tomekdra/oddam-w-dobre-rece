import React from "react";

const ListWithPagination = ({list}) => {

    return (
        <div>
            <ul className={"whowehelp-list"}>
                {list.map((el, index) => (
                    <li key={index}><h4>{el.who}</h4><p>{el.purpose}</p><div className={"whowehelp-what"}>{el.what}</div></li>
                ))}
            </ul>
        </div>
    )
}

export default ListWithPagination;