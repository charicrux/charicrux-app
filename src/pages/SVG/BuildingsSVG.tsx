import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `<svg width="189" height="133" viewBox="0 0 189 133" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M94.3007 132.954C146.382 132.954 188.601 128.988 188.601 124.095C188.601 119.202 146.382 115.235 94.3007 115.235C42.2199 115.235 0 119.202 0 124.095C0 128.988 42.2199 132.954 94.3007 132.954Z" fill="#3F3D56"/>
    <path opacity="0.1" d="M89.694 128.253C138.133 128.253 177.401 126.391 177.401 124.095C177.401 121.798 138.133 119.936 89.694 119.936C41.2549 119.936 1.98715 121.798 1.98715 124.095C1.98715 126.391 41.2549 128.253 89.694 128.253Z" fill="black"/>
    <path d="M138.215 5.43878V15.3785H125.286V123.778H152.268V19.5046V15.3785V5.43878H138.215Z" fill="#575A89"/>
    <path d="M67.0106 72.204V55.1378H50.5212V72.204H44.3378V123.966H73.0067V72.204H67.0106Z" fill="#575A89"/>
    <path d="M69.8213 99.9603H47.5232V124.153H69.8213V99.9603Z" fill="#3F3D56"/>
    <path opacity="0.1" d="M51.0834 99.9603H47.5232V124.153H51.0834V99.9603Z" fill="black"/>
    <path d="M115.729 0V5.81381H82.7504V0H73.0067V124.153H125.286V0H115.729Z" fill="#3F3D56"/>
    <path opacity="0.1" d="M123.037 6.10352e-05H115.729V5.81389H123.037V6.10352e-05Z" fill="black"/>
    <path opacity="0.1" d="M80.3145 6.10352e-05H73.0067V124.153H80.3145V6.10352e-05Z" fill="black"/>
    <path d="M35.7184 35.4456V30.757H30.8465V35.4456H22.0395V124.153H44.3378V35.4456H35.7184Z" fill="#3F3D56"/>
    <path opacity="0.1" d="M33.4697 30.757H30.8464V35.4456H33.4697V30.757Z" fill="black"/>
    <path opacity="0.1" d="M24.6629 35.4456H22.0396V124.153H24.6629V35.4456Z" fill="black"/>
    <path opacity="0.1" d="M123.037 47.8234H115.729V124.153H123.037V47.8234Z" fill="black"/>
    <path opacity="0.1" d="M44.3378 35.4456H37.5921V51.7618H44.3378V35.4456Z" fill="black"/>
    <path d="M91.5573 15.7537H81.0641V20.2547H91.5573V15.7537Z" fill="#6467C6"/>
    <path d="M113.855 62.0767H103.362V66.5777H113.855V62.0767Z" fill="#6467C6"/>
    <path d="M91.5573 94.5215H81.0641V99.0226H91.5573V94.5215Z" fill="#6467C6"/>
    <path d="M38.529 55.7003H28.0358V60.2013H38.529V55.7003Z" fill="#6467C6"/>
    <path d="M64.0125 102.586H53.5193V107.087H64.0125V102.586Z" fill="#6467C6"/>
    <path opacity="0.1" d="M67.7601 76.1424H49.7717V83.6441H67.7601V76.1424Z" fill="black"/>
    <path opacity="0.1" d="M146.459 24.0056H128.471V31.5073H146.459V24.0056Z" fill="black"/>
    <path opacity="0.1" d="M146.459 39.9467H128.471V47.4484H146.459V39.9467Z" fill="black"/>
    <path opacity="0.1" d="M146.459 55.8878H128.471V63.3895H146.459V55.8878Z" fill="black"/>
    <path opacity="0.1" d="M146.459 71.8289H128.471V79.3306H146.459V71.8289Z" fill="black"/>
    <path opacity="0.1" d="M146.459 87.77H128.471V95.2717H146.459V87.77Z" fill="black"/>
    <path opacity="0.1" d="M146.459 103.711H128.471V111.213H146.459V103.711Z" fill="black"/>
    <path d="M158.452 57.9506V37.5085H145.335V57.9506H140.651V124.153H162.949V57.9506H158.452Z" fill="#3F3D56"/>
    <path opacity="0.1" d="M149.457 37.5086H145.335V57.9508H149.457V37.5086Z" fill="black"/>
    <path opacity="0.1" d="M144.773 57.9507H140.651V124.153H144.773V57.9507Z" fill="black"/>
    <path opacity="0.1" d="M162.949 91.1458H151.893V97.7098H162.949V91.1458Z" fill="black"/>
    <path d="M162.761 81.3936H152.268V85.8946H162.761V81.3936Z" fill="#6467C6"/>
    </svg>
`;

type BuildingsSVGProps = {
    width?: number,
}

const BuildingsSVG: React.FC<BuildingsSVGProps> = ({ width }) => {
    return (
        <SvgXml xml={xml} height={width} width={width}/>
    )
}

export default BuildingsSVG;