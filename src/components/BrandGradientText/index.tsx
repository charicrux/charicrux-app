import React from "react";
import GradientText from "../GradientText";

interface IBrandGradientTextProps {
    text: string,
}

const BrandGradientText : React.FC<IBrandGradientTextProps> = ({ text }) => {
    return (
        <GradientText 
            end={0.25}
            style={{ fontWeight: '600', fontSize: 13 }}
            colors={['rgba(178, 40, 188, 0.47)', '#666AFF',]}
        >
            { text }
        </GradientText>
    )
}

export default BrandGradientText;