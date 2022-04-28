import React from "react";

const FeatureCard = ({ title, subtitle, imageSrc, hasAdditional }) => {
    return (
        <div className="feature-card">
            <div className="card-logo ">
                <img
                    src={imageSrc}
                    width={50}
                    height={50}
                    alt="" />
            </div>
            <div className="feature-card-title">{title}</div>
            <div className="feature-card-subtitle">{subtitle}</div>
            {hasAdditional &&
                <div className="feature-card-subtitle-additional">Test</div>
            }

        </div>
    );
};

export default FeatureCard;