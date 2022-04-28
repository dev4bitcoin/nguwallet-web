import React from "react";
import MaterialCommunityIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const FeatureCard = ({ title, subtitle, iconName, hasAdditional }) => {
    return (
        <div className="feature-card">
            <div className="card-logo ">
                <MaterialCommunityIcon name={iconName} size={45} color="#fff" />
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