import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `<svg width="155" height="253" viewBox="0 0 155 253" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M77.0339 0L0 128.829L77.2961 174.669L77.0339 0Z" fill="#8C8C8C"/>
    <path d="M154.592 128.829L77.2961 0L77.558 174.669L154.592 128.829Z" fill="#333333"/>
    <path d="M1.52588e-05 128.758L77.2029 93.3576L77.2961 174.669L1.52588e-05 128.758Z" fill="#383838"/>
    <path d="M154.592 128.74L77.2961 93.3576L77.4634 171.658L154.592 128.74Z" fill="#141414"/>
    <path d="M154.592 143.55L77.2961 189.326V252.467L154.592 143.55Z" fill="#333333"/>
    <path d="M1.52588e-05 143.55L77.2961 189.326V252.467L1.52588e-05 143.55Z" fill="#8C8C8C"/>
    <path d="M77.0339 0L0 128.829L77.2961 174.669L77.0339 0Z" fill="#8C8C8C"/>
    <path d="M155 128.335L77 0L77.2643 174L155 128.335Z" fill="#333333"/>
    <path d="M1.52588e-05 128.758L77.2029 93.3576L77.2961 174.669L1.52588e-05 128.758Z" fill="#383838"/>
    <path d="M155 130.055L77 93L77.1688 175L155 130.055Z" fill="#141414"/>
    <path d="M154.592 143.55L77.2961 189.326V252.467L154.592 143.55Z" fill="#333333"/>
    <path d="M1.52588e-05 143.55L77.2961 189.326V252.467L1.52588e-05 143.55Z" fill="#8C8C8C"/>
    </svg>
`;

type EtherIconSVGProps = {
    width?: number,
}

const EtherIconSVG: React.FC<EtherIconSVGProps> = ({ width }) => {
    return (
        <SvgXml xml={xml} height={width} width={width}/>
    )
}

export default EtherIconSVG;