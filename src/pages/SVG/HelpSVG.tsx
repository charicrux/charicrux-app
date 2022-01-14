import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `<svg width="275" height="218" viewBox="0 0 275 218" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M273.688 129.462C278.176 162.834 272.065 196.241 240.986 209.25C209.907 222.259 174.158 207.628 161.14 176.572C148.122 145.515 178.838 126.932 193.842 96.7839C224.313 35.5613 259.753 25.8287 273.688 129.462Z" fill="#202143"/>
<path d="M217.5 218C244.286 218 266 215.09 266 211.5C266 207.91 244.286 205 217.5 205C190.714 205 169 207.91 169 211.5C169 215.09 190.714 218 217.5 218Z" fill="#3F3D56"/>
<path d="M197.428 191.354L185.506 194.645L187.345 201.29L199.267 197.999L197.428 191.354Z" fill="#2F2E41"/>
<path d="M186.328 202.465C187.476 202.148 187.721 199.412 186.874 196.353C186.028 193.295 184.411 191.073 183.262 191.39C182.114 191.707 181.869 194.443 182.716 197.501C183.562 200.56 185.179 202.782 186.328 202.465Z" fill="#2F2E41"/>
<path d="M223.135 171.79C223.978 165.58 223.079 160.331 221.127 160.067C219.175 159.803 216.909 164.623 216.066 170.833C215.223 177.043 216.123 182.291 218.075 182.556C220.027 182.82 222.292 178 223.135 171.79Z" fill="#2F2E41"/>
<path d="M217.5 215C229.926 215 240 204.926 240 192.5C240 180.074 229.926 170 217.5 170C205.074 170 195 180.074 195 192.5C195 204.926 205.074 215 217.5 215Z" fill="#2F2E41"/>
<path d="M197.428 187.332L185.506 190.623L187.345 197.268L199.267 193.977L197.428 187.332Z" fill="#2F2E41"/>
<path d="M186.328 198.443C187.476 198.126 187.721 195.39 186.874 192.332C186.028 189.273 184.411 187.051 183.262 187.368C182.114 187.685 181.869 190.421 182.716 193.48C183.562 196.538 185.179 198.76 186.328 198.443Z" fill="#2F2E41"/>
<path d="M223.5 187C227.642 187 231 183.642 231 179.5C231 175.358 227.642 172 223.5 172C219.358 172 216 175.358 216 179.5C216 183.642 219.358 187 223.5 187Z" fill="white"/>
<path d="M225.5 179C226.881 179 228 177.881 228 176.5C228 175.119 226.881 174 225.5 174C224.119 174 223 175.119 223 176.5C223 177.881 224.119 179 225.5 179Z" fill="#3F3D56"/>
<path d="M243.839 207.985C252.103 207.572 258.433 199.858 257.977 190.754C257.52 181.65 250.45 174.604 242.185 175.017C233.92 175.43 232.624 181.905 233.08 191.009C233.537 200.112 235.574 208.398 243.839 207.985Z" fill="#6C63FF"/>
<path d="M207.806 182.984C206.386 183.091 204.978 182.668 203.893 181.809C202.807 180.95 202.132 179.725 202.018 178.403C201.903 177.081 202.357 175.771 203.28 174.761C204.203 173.75 205.519 173.123 206.939 173.016C209.897 172.793 210.704 174.978 210.943 177.731C211.182 180.483 210.764 182.761 207.806 182.984Z" fill="white"/>
<path d="M231 146H194V164H231V146Z" fill="#6C63FF"/>
<path d="M214.606 177.182C215.449 170.972 214.55 165.724 212.598 165.459C210.646 165.195 208.38 170.015 207.537 176.225C206.694 182.435 207.593 187.684 209.546 187.948C211.498 188.212 213.763 183.392 214.606 177.182Z" fill="#2F2E41"/>
<path d="M163 180C164.105 180 165 179.328 165 178.5C165 177.672 164.105 177 163 177C161.895 177 161 177.672 161 178.5C161 179.328 161.895 180 163 180Z" fill="#FF6584"/>
<path d="M242.712 102C242.683 102 242.653 101.996 242.625 101.987C166.489 78.6469 99.3851 81.699 56.4988 88.3694C50.6624 89.2769 44.8104 90.3249 39.1054 91.4848C37.6489 91.7805 36.1379 92.0976 34.6143 92.4277C32.7948 92.8204 30.9994 93.225 29.2779 93.6295C28.5344 93.8001 27.8054 93.9721 27.091 94.1455C26.0088 94.4044 24.9107 94.6743 23.7336 94.9709C22.4182 95.2996 21.0818 95.6444 19.7606 95.9958C19.7557 95.9974 19.7508 95.9988 19.7458 95.9999L19.746 96.0001C18.2536 96.3951 16.7691 96.8015 15.3336 97.2074C14.5566 97.4249 13.8064 97.6395 13.0878 97.8513C13.0075 97.8728 12.9363 97.8935 12.8642 97.9148L12.7098 97.9603C12.6204 97.9867 12.5321 98.0126 12.4438 98.0372L12.4382 98.0388L12.4383 98.0391L12.2046 98.1094C11.926 98.1912 11.6541 98.2711 11.3866 98.3507C4.31887 100.463 0.43348 101.965 0.395096 101.98C0.359996 101.993 0.322468 102 0.284656 102C0.246843 101.999 0.209487 101.992 0.174719 101.977C0.13995 101.963 0.108451 101.942 0.0820204 101.916C0.0555896 101.89 0.0347438 101.859 0.0206742 101.825C0.00660458 101.791 -0.000414673 101.754 1.893e-05 101.718C0.000452533 101.681 0.00832982 101.645 0.0232006 101.611C0.0380714 101.577 0.0596448 101.547 0.0866888 101.521C0.113733 101.495 0.145719 101.475 0.180819 101.462C0.219486 101.447 4.12385 99.9368 11.2173 97.8169C11.4858 97.7371 11.7584 97.6572 12.0379 97.5752L12.255 97.5097C12.2624 97.507 12.2699 97.5048 12.2775 97.5026C12.3654 97.4784 12.4531 97.4525 12.5422 97.4263L12.6969 97.3808C12.7739 97.3582 12.8499 97.3358 12.9276 97.3151C13.6413 97.1047 14.3941 96.8896 15.173 96.6713C16.6091 96.2651 18.095 95.8587 19.5885 95.4632C19.5931 95.4615 19.5979 95.4604 19.6025 95.4591V95.4588C20.9284 95.1063 22.2698 94.7602 23.5893 94.4303C24.7683 94.1335 25.8684 93.8631 26.9525 93.6036C27.67 93.4305 28.4004 93.2581 29.1436 93.0865C30.8671 92.6814 32.6661 92.2764 34.4889 91.8828C36.0148 91.5524 37.5284 91.2346 38.9873 90.9385C44.7012 89.7768 50.5623 88.7271 56.4076 87.8183C99.3553 81.1383 166.555 78.0813 242.799 101.455C242.864 101.475 242.92 101.517 242.957 101.574C242.993 101.63 243.007 101.698 242.997 101.763C242.986 101.829 242.952 101.889 242.9 101.933C242.847 101.976 242.781 102 242.712 102L242.712 102Z" fill="#2F2E41"/>
<path d="M69.1874 98.0172C71.4277 92.1634 71.7522 86.8486 69.9121 86.1462C68.072 85.4438 64.7641 89.6198 62.5237 95.4736C60.2834 101.327 59.9589 106.642 61.799 107.345C63.6391 108.047 66.947 103.871 69.1874 98.0172Z" fill="#2F2E41"/>
<path d="M71 90C73.2091 90 75 88.2091 75 86C75 83.7909 73.2091 82 71 82C68.7909 82 67 83.7909 67 86C67 88.2091 68.7909 90 71 90Z" fill="#6C63FF"/>
<path d="M125.5 65C124.61 65 123.74 64.7361 123 64.2417C122.26 63.7472 121.683 63.0444 121.343 62.2221C121.002 61.3999 120.913 60.4951 121.086 59.6222C121.26 58.7492 121.689 57.9474 122.318 57.3181C122.947 56.6887 123.749 56.2601 124.622 56.0865C125.495 55.9128 126.4 56.0019 127.222 56.3425C128.044 56.6831 128.747 57.2599 129.242 57.9999C129.736 58.7399 130 59.6099 130 60.4999C129.999 61.693 129.524 62.8368 128.681 63.6804C127.837 64.5241 126.693 64.9986 125.5 65V65ZM125.5 56.5712C124.723 56.5712 123.963 56.8016 123.317 57.2333C122.671 57.665 122.168 58.2786 121.87 58.9965C121.573 59.7144 121.495 60.5043 121.647 61.2665C121.798 62.0286 122.172 62.7286 122.722 63.2781C123.271 63.8275 123.971 64.2017 124.734 64.3533C125.496 64.5049 126.286 64.4271 127.004 64.1297C127.721 63.8323 128.335 63.3288 128.767 62.6827C129.198 62.0366 129.429 61.277 129.429 60.4999C129.428 59.4583 129.013 58.4597 128.277 57.7232C127.54 56.9867 126.542 56.5724 125.5 56.5712Z" fill="#3F3D56"/>
<path d="M157.5 117C156.61 117 155.74 116.736 155 116.242C154.26 115.747 153.683 115.044 153.343 114.222C153.002 113.4 152.913 112.495 153.086 111.622C153.26 110.749 153.689 109.947 154.318 109.318C154.947 108.689 155.749 108.26 156.622 108.086C157.495 107.913 158.4 108.002 159.222 108.343C160.044 108.683 160.747 109.26 161.242 110C161.736 110.74 162 111.61 162 112.5C161.999 113.693 161.524 114.837 160.681 115.68C159.837 116.524 158.693 116.999 157.5 117V117ZM157.5 108.571C156.723 108.571 155.963 108.802 155.317 109.233C154.671 109.665 154.168 110.279 153.87 110.996C153.573 111.714 153.495 112.504 153.647 113.266C153.798 114.029 154.172 114.729 154.722 115.278C155.271 115.828 155.971 116.202 156.734 116.353C157.496 116.505 158.286 116.427 159.004 116.13C159.721 115.832 160.335 115.329 160.767 114.683C161.198 114.037 161.429 113.277 161.429 112.5C161.428 111.458 161.013 110.46 160.277 109.723C159.54 108.987 158.542 108.572 157.5 108.571V108.571Z" fill="#3F3D56"/>
<path d="M89.5 142C88.61 142 87.74 141.736 86.9999 141.242C86.2599 140.747 85.6832 140.044 85.3426 139.222C85.002 138.4 84.9128 137.495 85.0865 136.622C85.2601 135.749 85.6887 134.947 86.318 134.318C86.9473 133.689 87.7491 133.26 88.622 133.086C89.4949 132.913 90.3997 133.002 91.222 133.343C92.0442 133.683 92.7471 134.26 93.2415 135C93.736 135.74 94 136.61 94 137.5C93.9987 138.693 93.5241 139.837 92.6805 140.68C91.8369 141.524 90.6931 141.999 89.5 142V142ZM89.5 133.571C88.723 133.571 87.9634 133.802 87.3173 134.233C86.6712 134.665 86.1676 135.279 85.8703 135.997C85.5729 136.714 85.4951 137.504 85.6467 138.267C85.7983 139.029 86.1725 139.729 86.722 140.278C87.2715 140.828 87.9715 141.202 88.7336 141.353C89.4957 141.505 90.2857 141.427 91.0036 141.13C91.7215 140.832 92.335 140.329 92.7667 139.683C93.1984 139.037 93.4288 138.277 93.4288 137.5C93.4276 136.458 93.0132 135.46 92.2767 134.723C91.5402 133.987 90.5416 133.572 89.5 133.571V133.571Z" fill="#3F3D56"/>
<path d="M55 218C82.062 218 104 215.09 104 211.5C104 207.91 82.062 205 55 205C27.938 205 6 207.91 6 211.5C6 215.09 27.938 218 55 218Z" fill="#3F3D56"/>
<path d="M52.5 202C64.9264 202 75 191.703 75 179C75 166.297 64.9264 156 52.5 156C40.0736 156 30 166.297 30 179C30 191.703 40.0736 202 52.5 202Z" fill="#2F2E41"/>
<path d="M49 197H42V209H49V197Z" fill="#2F2E41"/>
<path d="M63 197H56V209H63V197Z" fill="#2F2E41"/>
<path d="M48 212C51.3137 212 54 210.881 54 209.5C54 208.119 51.3137 207 48 207C44.6863 207 42 208.119 42 209.5C42 210.881 44.6863 212 48 212Z" fill="#2F2E41"/>
<path d="M62 211C65.3137 211 68 210.105 68 209C68 207.895 65.3137 207 62 207C58.6863 207 56 207.895 56 209C56 210.105 58.6863 211 62 211Z" fill="#2F2E41"/>
<path d="M53 181C57.4183 181 61 177.642 61 173.5C61 169.358 57.4183 166 53 166C48.5817 166 45 169.358 45 173.5C45 177.642 48.5817 181 53 181Z" fill="white"/>
<path d="M53.5 176C54.8807 176 56 174.881 56 173.5C56 172.119 54.8807 171 53.5 171C52.1193 171 51 172.119 51 173.5C51 174.881 52.1193 176 53.5 176Z" fill="#3F3D56"/>
<path d="M30.3408 157.906C28.4792 149.727 34.43 141.463 43.6323 139.447C52.8346 137.431 61.8037 142.427 63.6653 150.606C65.5269 158.785 59.4282 161.802 50.2259 163.817C41.0236 165.833 32.2024 166.085 30.3408 157.906Z" fill="#6C63FF"/>
<path d="M45 137C57.7025 137 68 126.703 68 114C68 101.297 57.7025 91 45 91C32.2974 91 22 101.297 22 114C22 126.703 32.2974 137 45 137Z" fill="#2F2E41"/>
<path d="M41 132H34V144H41V132Z" fill="#2F2E41"/>
<path d="M55 132H48V144H55V132Z" fill="#2F2E41"/>
<path d="M40 146C43.3137 146 46 145.105 46 144C46 142.895 43.3137 142 40 142C36.6863 142 34 142.895 34 144C34 145.105 36.6863 146 40 146Z" fill="#2F2E41"/>
<path d="M54 146C57.3137 146 60 145.105 60 144C60 142.895 57.3137 142 54 142C50.6863 142 48 142.895 48 144C48 145.105 50.6863 146 54 146Z" fill="#2F2E41"/>
<path d="M45.5 116C49.6421 116 53 112.418 53 108C53 103.582 49.6421 100 45.5 100C41.3579 100 38 103.582 38 108C38 112.418 41.3579 116 45.5 116Z" fill="white"/>
<path d="M45.5 111C46.8807 111 48 109.881 48 108.5C48 107.119 46.8807 106 45.5 106C44.1193 106 43 107.119 43 108.5C43 109.881 44.1193 111 45.5 111Z" fill="#3F3D56"/>
<path d="M22.3408 92.9059C20.4792 84.727 26.43 76.4625 35.6323 74.4467C44.8346 72.4309 53.8037 77.4271 55.6653 85.606C57.5269 93.785 51.4282 96.8015 42.2259 98.8173C33.0236 100.833 24.2024 101.085 22.3408 92.9059Z" fill="#6C63FF"/>
<path d="M29.5227 108.215C30.3669 106.438 26.455 102.82 20.7853 100.134C15.1156 97.4486 9.8351 96.7125 8.99092 98.4901C8.14674 100.268 12.0586 103.886 17.7283 106.571C23.398 109.257 28.6786 109.993 29.5227 108.215Z" fill="#2F2E41"/>
<path d="M34 121.942C34 124.315 39.6342 129 45.8862 129C52.1381 129 58 122.32 58 119.947C58 117.574 52.1381 120.407 45.8862 120.407C39.6342 120.407 34 119.569 34 121.942Z" fill="white"/>
<path d="M223.5 77C235.926 77 246 66.9264 246 54.5C246 42.0736 235.926 32 223.5 32C211.074 32 201 42.0736 201 54.5C201 66.9264 211.074 77 223.5 77Z" fill="#2F2E41"/>
<path d="M236.63 70.1104L229.836 71.3385L232.04 83.4934L238.833 82.2653L236.63 70.1104Z" fill="#2F2E41"/>
<path d="M223.045 72.5693L216.251 73.7974L218.455 85.9523L225.248 84.7242L223.045 72.5693Z" fill="#2F2E41"/>
<path d="M222.06 88.5089C224.485 86.4583 225.826 84.0598 225.056 83.1518C224.286 82.2437 221.696 83.17 219.272 85.2207C216.847 87.2713 215.506 89.6698 216.276 90.5778C217.046 91.4858 219.636 90.5596 222.06 88.5089Z" fill="#2F2E41"/>
<path d="M235.363 86.104C237.788 84.0533 239.129 81.6549 238.359 80.7469C237.589 79.8388 234.999 80.7651 232.575 82.8158C230.15 84.8664 228.809 87.2649 229.579 88.1729C230.349 89.0809 232.939 88.1546 235.363 86.104Z" fill="#2F2E41"/>
<path d="M221.5 57C225.642 57 229 53.4183 229 49C229 44.5817 225.642 41 221.5 41C217.358 41 214 44.5817 214 49C214 53.4183 217.358 57 221.5 57Z" fill="white"/>
<path d="M218.5 49C219.881 49 221 47.8807 221 46.5C221 45.1193 219.881 44 218.5 44C217.119 44 216 45.1193 216 46.5C216 47.8807 217.119 49 218.5 49Z" fill="#3F3D56"/>
<path d="M240.989 29.7273C241.324 21.4222 234.213 14.3878 225.107 14.0154C216.001 13.643 208.348 20.0738 208.013 28.3788C207.678 36.6839 214.007 38.5709 223.113 38.9433C232.22 39.3156 240.654 38.0324 240.989 29.7273Z" fill="#6C63FF"/>
<path d="M213.356 52.829C213.796 50.9114 209.195 48.2219 203.078 46.8217C196.962 45.4216 191.646 45.8411 191.206 47.7587C190.766 49.6763 195.368 52.3659 201.484 53.766C207.601 55.1661 212.916 54.7467 213.356 52.829Z" fill="#2F2E41"/>
<path d="M257.962 60.2371C258.402 58.3195 253.801 55.6299 247.684 54.2298C241.568 52.8297 236.253 53.2492 235.813 55.1668C235.372 57.0844 239.974 59.7739 246.09 61.1741C252.207 62.5742 257.522 62.1547 257.962 60.2371Z" fill="#2F2E41"/>
<path d="M229.912 63.4543C230.041 64.0626 230.028 64.6866 229.875 65.2907C229.722 65.8948 229.431 66.4672 229.019 66.9752C228.607 67.4831 228.082 67.9167 227.474 68.2513C226.866 68.5858 226.187 68.8146 225.476 68.9247C224.765 69.0348 224.035 69.0241 223.329 68.893C222.622 68.762 221.953 68.5132 221.359 68.161C220.765 67.8087 220.258 67.3599 219.867 66.84C219.475 66.3202 219.208 65.7396 219.079 65.1313C218.537 62.5732 220.85 61.668 223.842 61.2049C226.833 60.7418 229.37 60.8962 229.912 63.4543Z" fill="white"/>
<path d="M167.794 28.2117L167.443 28.6671L193.619 48.7757L193.97 48.3204L167.794 28.2117Z" fill="#3F3D56"/>
<path d="M155.5 39C166.27 39 175 30.2696 175 19.5C175 8.73045 166.27 0 155.5 0C144.73 0 136 8.73045 136 19.5C136 30.2696 144.73 39 155.5 39Z" fill="#FF6584"/>
<path d="M26 209C28.2091 209 30 207.209 30 205C30 202.791 28.2091 201 26 201C23.7909 201 22 202.791 22 205C22 207.209 23.7909 209 26 209Z" fill="#6C63FF"/>
<path d="M91 200H80V211H91V200Z" fill="#FF6584"/>
<path d="M80 211C82.2091 211 84 209.209 84 207C84 204.791 82.2091 203 80 203C77.7909 203 76 204.791 76 207C76 209.209 77.7909 211 80 211Z" fill="#6C63FF"/>
</svg>
`;

type HelpVGProps = {
    width?: number,
}

const HelpSVG: React.FC<HelpVGProps> = ({ width }) => {
    return (
        <SvgXml xml={xml} height={width} width={width}/>
    )
}

export default HelpSVG;