import React from 'react';
import { SvgXml } from "react-native-svg";

const xml = `<svg width="252" height="250" viewBox="0 0 252 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.75" d="M198.568 226.311C85.5684 306.311 -77.4316 161.311 41.5684 41.3113C110.568 3.31123 135.124 55.5262 150.568 47.3113C244.568 -2.68875 296.937 156.67 198.568 226.311Z" fill="#87309E" />
    <ellipse cx="130.568" cy="117.311" rx="119" ry="117" fill="url(#paint0_linear_0_1)" />
    <path d="M208.348 40.0907L84.46 69.7971L104.385 144.374L208.348 40.0907Z" fill="#8C8C8C" />
    <path d="M178.962 164.299L208.508 40.2509L104.545 144.534L178.962 164.299Z" fill="#333333" />
    <path d="M84.5021 69.7549L152.799 95.8461L104.385 144.374L84.5021 69.7549Z" fill="#383838" />
    <path d="M179.015 164.246L152.856 95.9031L106.282 142.681L179.015 164.246Z" fill="#141414" />
    <path d="M170.187 173.074L95.6476 153.111L58.0082 190.751L170.187 173.074Z" fill="#333333" />
    <path d="M75.6846 78.5724L95.6476 153.111L58.0082 190.751L75.6846 78.5724Z" fill="#8C8C8C" />
    <path d="M208.348 40.0907L84.46 69.7971L104.385 144.374L208.348 40.0907Z" fill="#8C8C8C" />
    <path d="M178.962 164.299L208.508 40.2509L104.545 144.534L178.962 164.299Z" fill="#333333" />
    <path d="M84.5021 69.7549L152.799 95.8461L104.385 144.374L84.5021 69.7549Z" fill="#383838" />
    <path d="M179.015 164.246L152.856 95.9031L106.282 142.681L179.015 164.246Z" fill="#141414" />
    <path d="M170.187 173.074L95.6476 153.111L58.0082 190.751L170.187 173.074Z" fill="#333333" />
    <path d="M75.6846 78.5724L95.6476 153.111L58.0082 190.751L75.6846 78.5724Z" fill="#8C8C8C" />
    <defs>
    <linearGradient id="paint0_linear_0_1" x1="311.638" y1="43.4575" x2="133.846" y2="237.318" gradientUnits="userSpaceOnUse">
        <stop offset="0.244792" stop-color="#62F6FF" />
        <stop offset="0.552083" stop-color="#666AFF" />
        <stop offset="1" stop-color="#B228BC" stop-opacity="0.47" />
    </linearGradient>
    </defs>
    </svg>`;

type EtherGradientTokenSVGProps = {
    width?: number,
}

const EtherGradientTokenSVG: React.FC<EtherGradientTokenSVGProps> = ({ width }) => {
    return (
        <SvgXml xml={xml} height={width} width={width}/>
    )
}

export default EtherGradientTokenSVG;