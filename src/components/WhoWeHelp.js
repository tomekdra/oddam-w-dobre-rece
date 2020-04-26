import React, {useState} from "react";
import ChooseButton from "./WhoWeHelp/ChooseButton";
import ListWithPagination from "./WhoWeHelp/ListWhithPagination";
import possibleChoices from './WhoWeHelp/helpChoices';

const WhoWeHelp = () => {

    const [currentChoose, setCurrentChoose] = useState(possibleChoices.fundations);

    const handleClick = choice => setCurrentChoose(possibleChoices[choice]);

    const isActive = choice => JSON.stringify(possibleChoices[choice]) === JSON.stringify(currentChoose);

    return (
        <div className={"container"}>
            <div className={"whowehelp"}>
                <h2>Komu pomagamy</h2>
                <div className={"decoration"}/>
                <div className={'whowehelp-buttons'}>
                    <ChooseButton text={"Fundacjom"} choice={'fundations'} isActive={isActive('fundations')} onClick={(e) => handleClick(e)} />
                    <ChooseButton text={"Organizacjom pozarządowym"} choice={'organizations'} isActive={isActive('organizations')} onClick={e => handleClick(e)} />
                    <ChooseButton text={"Lokalnym zbiórkom"} choice={'local'} isActive={isActive('local')} onClick={e => handleClick(e)} />
                </div>
                <div className={"whowehelp-description"}>
                    <p>{currentChoose.description}</p>
                </div>

                <ListWithPagination list={currentChoose.items} />

            </div>
        </div>
    )
}

export default WhoWeHelp;