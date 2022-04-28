import React, { Fragment } from "react";
import home from '../assets/appimage.png';
import common from "../common/common";
import FeatureCard from "../components/featureCard";
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Home = () => {
    return (
        <Fragment>
            <div className="main">
                <div className="inline-block download-panel">
                    <div className="text"><h1>Simple Bitcoin Testnet Wallet</h1></div>
                    <div className="download-container">
                        <div className="download-pill inline-block">
                            <div className="logo inline-block">
                                <MaterialCommunityIcon name="apple" size={50} color="#fff" />
                            </div>
                            <div className="download-pill-text-panel inline-block">
                                <div className="text">Download on the</div>
                                <div className="text text-bold">App Store</div>
                            </div>
                        </div>
                        {/* <div className="download-pill inline-block">
                            <div className="logo inline-block">
                                <MaterialCommunityIcon name="google-play" size={50} color="#fff" />
                            </div>
                            <div className="download-pill-text-panel inline-block">
                                <div className="text">Download on the</div>
                                <div className="text text-bold">Play Store</div>
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
                            iconName={card.iconName} />
                    ))}
                </div>
            </div>

        </Fragment>
    );
};

export default Home;