import React from "react";

 const Pagination = ({ postPerPage, totalPost, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul>
            { pageNumbers.length > 1 && pageNumbers.map(number => (
                <li key={number}>
                    <button onClick={() => paginate(number)}>{number}</button>
                </li>
            ))}

        </ul>
    )
}
export default Pagination;