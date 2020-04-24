import React from "react";
import Icon from "./elements/Icon";
import Button from "./elements/Button";

const FourSteps = () => {

    return (
        <div className={"container"}>
            <div className={"four-steps"}>
                <h2>Wystarczą 4 proste kroki</h2>
                <div className={"decoration"}></div>
                <div className={"row"}>
                    <div className={"col"}>
                        <Icon nrIcon={1} />
                        <h4>Wybierz rzeczy</h4>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className={"col"}>
                        <Icon nrIcon={2} />
                        <h4>Spakuj je</h4>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className={"col"}>
                        <Icon nrIcon={3} />
                        <h4>Zdecyduj komu chcesz pomóc</h4>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className={"col"}>
                        <Icon nrIcon={4} />
                        <h4>Zamów kuriera</h4>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <Button url={"/logowanie"} text={"ODDAJ RZECZY"} />
            </div>
        </div>
    )
}

export default FourSteps;