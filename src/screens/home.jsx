import React, { Fragment } from "react";
import home from '../assets/appimage.png';
import apple from '../assets/apple.png'
import common from "../common/common";
// import playstore from '../assets/playstore.png'
import FeatureCard from "../components/featureCard";


const Home = () => {
    return (
        <Fragment>
            <div className="main">
                <div className="inline-block download-panel">
                    <div className="text"><h1>Simple Bitcoin Testnet Wallet</h1></div>
                    <div className="download-container">
                        <div className="download-pill inline-block">
                            <img className="logo"
                                src={apple}
                                width={40}
                                alt=""
                            />
                            <div className="download-pill-text-panel inline-block">
                                <div className="text">Download on the</div>
                                <div className="text text-bold">App Store</div>
                            </div>
                        </div>
                        {/* <div className="download-pill inline-block">
                            <img className="logo"
                                src={playstore}
                                width={40}
                                height={50}
                                 alt=""
                            />
                            <div className="download-pill-text-panel inline-block">
                                <div className="text">Download on the</div>
                                <div className="text">Google Play</div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="inline-block">
                    <img
                        src={home}
                        width={340}
                        alt=""
                    />
                </div>
                <div className="features">
                    {common.getCards().map((card) => (
                        <FeatureCard
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            hasAdditional={card.hasAdditional}
                            imageSrc={card.src} />
                    ))}
                </div>
            </div>

        </Fragment>
    );
};

export default Home;