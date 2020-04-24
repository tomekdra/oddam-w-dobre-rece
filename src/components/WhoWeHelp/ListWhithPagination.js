import React, {useEffect, useState} from "react";
import Pagination from "./Pagination";

const ListWithPagination = ({list, changeList}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>
            <ul className={"whowehelp-list"}>
                { currentPosts.map((el, index) => (
                    <li key={index}><h4>{el.who}</h4><p>{el.purpose}</p><div className={"whowehelp-what"}>{el.what}</div></li>
                ))}
            </ul>
            <Pagination postPerPage={postsPerPage} totalPost={list.length} paginate={paginate} />
        </div>
    )
}

export default ListWithPagination;