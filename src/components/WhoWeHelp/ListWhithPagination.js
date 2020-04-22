import React from "react";

const ListWithPagination = ({list}) => {

    return (
        <div>
            <ul>
                {list.map((el, index) => <li key={index}>{el.purpose}</li>)}
            </ul>
        </div>
    )
}

export default ListWithPagination;