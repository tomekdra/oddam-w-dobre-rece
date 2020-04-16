import React from "react";
import {Link, NavLink, Route, Switch} from "react-router-dom";
import Fundations from "./WhoWeHelp/Fundations";
import Organizations from "./WhoWeHelp/Organizations";
import Local from "./WhoWeHelp/Local";

const WhoWeHelp = () => {

    const possibleChoices = {
        fundations: {
            description: 'Lorem ipsum',
            items: [
                {who: '', purpose: '', what: ''},
            ],
        },
        organizations: {},
        local: {},
    };
    const currentChoose = possibleChoices.fundations;

    const handleClick = (what) => {
        // e.g what = 'fundations'
        currentChoose = possibleChoices[what];
    };

    return (
        <div className={"who-we-help"}>
            <h2>Komu pomagamy</h2>
            <div className={"decoration"}/>
            {/* ChooseButton ma emitowac na onClick wartosc ktora dostal w choice */}
            <ChooseButton choice={'fundations'} onClick={e => handleClick(e)}></ChooseButton>
            <ChooseButton choice={'organizations'} onClick={e => handleClick(e)}></ChooseButton>
            <ChooseButton choice={'local'} onClick={e => handleClick(e)}></ChooseButton>

            {currentChoose.description}

            {/* Zawiera liste itemow razem z paginacja */}
            <ListWithPagination list={currentChoose.items}></ListWithPagination>

        </div>
    )
}

export default WhoWeHelp;