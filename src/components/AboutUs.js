import React from "react";
import signature from "./../assets/Signature.svg";

const AboutUs = () => {

    return (
        <div className={"wrapper"}>
            <div className={"aboutus"}>
                <div className={"aboutus-content half-page"}>
                    <div className={"aboutus-items"}>
                        <h2>O nas</h2>
                        <div className={"decoration"}></div>
                        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img src={signature} className={"signature"} alt="Signature"/>
                    </div>
                </div>
                <div className={"people-img"}>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;