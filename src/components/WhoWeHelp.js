import React from "react";
import ChooseButton from "./WhoWeHelp/ChooseButton";
import ListWithPagination from "./WhoWeHelp/ListWhithPagination";
import possibleChoices from './WhoWeHelp/helpChoices';

class WhoWeHelp extends React.Component {

        state = {
            currentChoose: possibleChoices.fundations
        }

    handleClick = choice => this.setState({currentChoose: possibleChoices[choice]});

    isActive = choice => JSON.stringify(possibleChoices[choice]) === JSON.stringify(this.currentChoose);

    render() {
        return (
            <div className={"container mb-50"}>
                <div className={"whowehelp"}>
                    <h2>Komu pomagamy</h2>
                    <div className={"decoration"}/>
                    <div className={'whowehelp-buttons'}>
                        <ChooseButton text={"Fundacjom"} choice={'fundations'} isActive={this.isActive('fundations')} onClick={(e) => this.handleClick(e)}  />
                        <ChooseButton text={"Organizacjom pozarządowym"} choice={'organizations'} isActive={this.isActive('organizations')} onClick={e => this.handleClick(e)}  />
                        <ChooseButton text={"Lokalnym zbiórkom"} choice={'local'} isActive={this.isActive('local')} onClick={e => this.handleClick(e)} />
                    </div>
                    <div className={"whowehelp-description"}>
                        <p>{this.state.currentChoose.description}</p>
                    </div>

                    <ListWithPagination list={this.state.currentChoose.items} />

                </div>
            </div>
        )
    }


}

export default WhoWeHelp;