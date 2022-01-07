import React from 'react';
import { SvgXml } from "react-native-svg";

const xml = `
<svg width="200" height="219" viewBox="0 0 200 219" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="98" fill="#202143" stroke="black" stroke-width="4"/>
<circle cx="100" cy="169" r="50" fill="#16152F"/>
<circle cx="99.5" cy="100.5" r="37.5" fill="#16152F"/>
<circle cx="100" cy="100" r="98" stroke="black" stroke-width="4"/>
</svg>
`
type DefaultAvatarSVGProps = {
    width?: number,
}

const DefaultAvatarSVG: React.FC<DefaultAvatarSVGProps> = ({ width }) => {
    return (
        <SvgXml xml={xml} height={width} width={width}/>
    )
}

export default DefaultAvatarSVG;