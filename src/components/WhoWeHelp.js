import React, {useState} from "react";
import ChooseButton from "./WhoWeHelp/ChooseButton";
import ListWithPagination from "./WhoWeHelp/ListWhithPagination";
import possibleChoices from './WhoWeHelp/helpChoices';
import Pagination from "./WhoWeHelp/Pagination";

const WhoWeHelp = () => {

    const [currentChoose, setCurrentChoose] = useState(possibleChoices.fundations);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const handleClick = choice => setCurrentChoose(possibleChoices[choice]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = currentChoose.items.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={"container"}>
            <div className={"whowehelp"}>
                <h2>Komu pomagamy</h2>
                <div className={"decoration"}/>
                {/* ChooseButton ma emitowac na onClick wartosc ktora dostal w choice */}
                <div className={'whowehelp-buttons'}>
                    <ChooseButton text={"Fundacjom"} choice={'fundations'}  onClick={(e) => handleClick(e)}></ChooseButton>
                    <ChooseButton text={"Organizacjom pozarządowym"} choice={'organizations'} onClick={e => handleClick(e)}></ChooseButton>
                    <ChooseButton text={"Lokalnym zbiórkom"} choice={'local'} onClick={e => handleClick(e)}></ChooseButton>
                </div>
                <div className={"whowehelp-description"}>
                    <p>{currentChoose.description}</p>
                </div>

                {/* Zawiera liste itemow razem z paginacja */}
                <ListWithPagination list={currentPosts}></ListWithPagination>
                <Pagination postPerPage={postsPerPage} totalPost={currentChoose.items.length} paginate={paginate}/>
            </div>
        </div>
    )
}

export default WhoWeHelp;