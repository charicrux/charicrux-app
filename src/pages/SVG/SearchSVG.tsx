
import React from "react";
import { SvgXml } from "react-native-svg";

const xml = `<svg width="345" height="439" viewBox="0 0 345 439" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M344.042 337.747H7.05371V0.499992H344.042V337.747Z" fill="#202143" stroke="#202143"/>
<path d="M344.542 338.247H6.55371V-7.62939e-06H344.542V338.247ZM11.5474 333.249H339.548V4.99757H11.5474V333.249Z" fill="#E5E5E5"/>
<path d="M284.666 52.9189H138.303V57.4816H284.666V52.9189Z" fill="#5D5FEF"/>
<path d="M284.666 64.7821H138.303V69.3448H284.666V64.7821Z" fill="#5D5FEF"/>
<path d="M284.666 76.6453H138.303V81.208H284.666V76.6453Z" fill="#5D5FEF"/>
<path d="M284.666 154.786H138.303V159.348H284.666V154.786Z" fill="#5D5FEF"/>
<path d="M284.666 166.649H138.303V171.212H284.666V166.649Z" fill="#5D5FEF"/>
<path d="M284.666 178.512H138.303V183.075H284.666V178.512Z" fill="#5D5FEF"/>
<path d="M284.666 256.653H138.303V261.215H284.666V256.653Z" fill="#5D5FEF"/>
<path d="M284.666 268.516H138.303V273.079H284.666V268.516Z" fill="#6C63FF"/>
<path d="M284.666 280.379H138.303V284.942H284.666V280.379Z" fill="#5D5FEF"/>
<path d="M92.2393 57.3926C90.8335 53.3511 88.5637 49.665 85.5882 46.5915C82.6127 43.518 79.0031 41.1311 75.0111 39.5971C71.0191 38.0632 66.7408 37.4192 62.4745 37.71C58.2082 38.0008 54.0567 39.2194 50.3094 41.2809C46.5621 43.3424 43.3092 46.1971 40.7776 49.646C38.246 53.0949 36.4966 57.0549 35.6514 61.2499C34.8062 65.4449 34.8856 69.7739 35.884 73.9351C36.8823 78.0963 38.7757 81.9894 41.432 85.343C41.6959 85.6758 41.9703 86.0085 42.2502 86.3307C42.2713 86.3518 42.287 86.373 42.3081 86.3941C42.9961 87.1873 43.7272 87.942 44.4983 88.6546C44.699 88.8395 44.9101 89.0296 45.1211 89.2092C45.5221 89.5683 45.9339 89.9116 46.3614 90.2391C46.5302 90.3711 46.6938 90.5032 46.868 90.63C47.5434 91.1423 48.2454 91.6176 48.9685 92.0718L49.0002 92.0877C49.2058 92.2144 49.4171 92.3412 49.6282 92.4627C50.0081 92.6898 50.3987 92.9063 50.7891 93.1123L51.0373 93.2391C51.6073 93.5349 52.1879 93.8148 52.7842 94.0736C52.9056 94.1264 53.0375 94.1792 53.1589 94.232C53.1695 94.2373 53.1746 94.2373 53.1852 94.2426C53.465 94.3588 53.7446 94.4697 54.0296 94.5753C54.9658 94.9332 55.9207 95.2399 56.89 95.4943C59.3641 96.1542 61.9136 96.488 64.474 96.4873C65.4081 96.4873 66.3317 96.445 67.2447 96.3552C69.3309 96.1625 71.3904 95.7464 73.3879 95.1141C73.393 95.1141 73.3985 95.1088 73.4036 95.1088C74.6654 94.7065 75.8981 94.2176 77.0928 93.6458C77.0979 93.6405 77.1085 93.6405 77.1139 93.6352C77.3829 93.5084 77.6417 93.3711 77.9055 93.2391L78.0321 93.1757C78.2431 93.0648 78.4544 92.9538 78.6655 92.8377C79.1932 92.5472 79.7104 92.2408 80.2222 91.9134C80.3647 91.8289 80.5021 91.7391 80.6446 91.644C80.8451 91.512 81.0455 91.3746 81.2409 91.232C81.4993 91.0525 81.7581 90.8676 82.0114 90.6775C82.0905 90.6194 82.175 90.5613 82.2541 90.4979C87.1985 86.7421 90.8277 81.516 92.6215 75.5689C94.4152 69.6218 94.2814 63.259 92.2393 57.3927V57.3926ZM81.2832 89.2144C81.109 89.3518 80.9296 89.4838 80.75 89.6053C80.5758 89.7373 80.4018 89.8641 80.2222 89.9803C80.0692 90.0912 79.9161 90.1969 79.7578 90.2972L79.7104 90.3289C79.5942 90.4081 79.4782 90.482 79.362 90.556C78.924 90.8306 78.4806 91.0947 78.0321 91.3482L77.8896 91.4275C77.6891 91.5384 77.4886 91.644 77.2881 91.7497C77.2616 91.7655 77.2299 91.7761 77.2036 91.7919L77.1719 91.8078C76.9186 91.9398 76.6599 92.0666 76.4014 92.188C75.4035 92.669 74.3757 93.0853 73.3245 93.4345C73.1872 93.482 73.0501 93.5296 72.913 93.5718C71.0223 94.1736 69.0725 94.5703 67.0971 94.7549C66.2315 94.8341 65.3553 94.8764 64.474 94.8764C62.0523 94.8814 59.6406 94.5653 57.3019 93.9362C56.1016 93.6227 54.9252 93.2238 53.7817 92.7426C53.7235 92.7162 53.6601 92.6951 53.6021 92.6687C53.539 92.6423 53.4808 92.6211 53.4228 92.5947C53.3594 92.5683 53.3014 92.5419 53.238 92.5102C52.7419 92.2937 52.251 92.056 51.7709 91.8078L51.5388 91.6863C50.9528 91.38 50.3776 91.0525 49.8181 90.7039C49.6545 90.6035 49.4857 90.4979 49.3272 90.387C49.2852 90.3606 49.2481 90.3342 49.2059 90.3077C48.8312 90.0595 48.4565 89.8007 48.0924 89.5314C47.8445 89.3465 47.5963 89.1616 47.3535 88.9715C46.9472 88.6652 46.5565 88.3377 46.1766 87.9997C45.9762 87.8307 45.7808 87.6458 45.5909 87.4715C44.8426 86.7801 44.1342 86.0465 43.4693 85.2744C43.2477 85.0209 43.0312 84.7673 42.8253 84.5033C42.7785 84.451 42.7345 84.3964 42.6934 84.3395C39.2644 80.0092 37.2019 74.7549 36.7689 69.2467C36.3359 63.7386 37.5521 58.2261 40.2623 53.4125C42.9725 48.5988 47.054 44.7021 51.9861 42.2193C56.9182 39.7364 62.4776 38.78 67.955 39.4719C73.4325 40.1639 78.58 42.4729 82.7409 46.1044C86.9018 49.736 89.8876 54.5255 91.3175 59.8622C92.7474 65.1988 92.5566 70.8408 90.7695 76.0685C88.9823 81.2962 85.6798 85.8728 81.2831 89.2145L81.2832 89.2144Z" fill="#3F3D56"/>
<path d="M92.2396 159.26C90.8338 155.218 88.5641 151.532 85.5886 148.458C82.613 145.385 79.0034 142.998 75.0114 141.464C71.0194 139.93 66.7411 139.286 62.4748 139.577C58.2086 139.868 54.057 141.086 50.3097 143.148C46.5624 145.209 43.3096 148.064 40.778 151.513C38.2464 154.962 36.497 158.922 35.6518 163.117C34.8066 167.312 34.886 171.641 35.8843 175.802C36.8827 179.963 38.776 183.856 41.4323 187.21C41.6962 187.543 41.9706 187.875 42.2502 188.198C42.2714 188.219 42.2871 188.24 42.3082 188.261C42.9963 189.054 43.7275 189.809 44.4986 190.521C44.6991 190.706 44.9102 190.896 45.1212 191.076C45.5224 191.435 45.934 191.779 46.3615 192.106C47.1962 192.764 48.0665 193.376 48.9686 193.939L49.0003 193.955C49.586 194.319 50.1823 194.657 50.7894 194.979L51.0374 195.106C51.6074 195.402 52.188 195.682 52.7843 195.94C52.9056 195.993 53.0376 196.046 53.159 196.099C53.1695 196.104 53.1749 196.104 53.1855 196.109C54.3904 196.611 55.6283 197.029 56.8904 197.361C59.3643 198.021 61.9138 198.355 64.4741 198.354C65.4082 198.354 66.3318 198.312 67.2448 198.222C69.331 198.029 71.3905 197.613 73.388 196.981C73.3934 196.981 73.3985 196.976 73.4037 196.976C74.6655 196.573 75.8982 196.085 77.0928 195.513C77.098 195.507 77.1088 195.507 77.114 195.502C77.383 195.375 77.6417 195.238 77.9056 195.106L78.0324 195.043C78.2434 194.932 78.4545 194.821 78.6656 194.704C79.1933 194.414 79.7105 194.108 80.2225 193.78C80.365 193.696 80.5021 193.606 80.6446 193.511C81.109 193.205 81.5682 192.877 82.0114 192.544C82.0908 192.486 82.1751 192.428 82.2545 192.365C87.1987 188.609 90.8278 183.383 92.6215 177.436C94.4153 171.489 94.2816 165.126 92.2396 159.26V159.26ZM81.2832 191.081C81.109 191.219 80.9296 191.351 80.7503 191.472C80.5761 191.604 80.4019 191.731 80.2226 191.847C80.0695 191.958 79.9164 192.064 79.7579 192.164C79.626 192.254 79.4941 192.338 79.3621 192.423C78.9243 192.697 78.481 192.962 78.0324 193.215L77.8896 193.294C77.6891 193.405 77.4887 193.511 77.2882 193.616C77.2616 193.632 77.2299 193.643 77.2037 193.659L77.172 193.675C76.9187 193.807 76.6602 193.933 76.4015 194.055C75.4036 194.536 74.3758 194.952 73.3246 195.301C73.1875 195.349 73.0502 195.396 72.9131 195.439C71.0224 196.04 69.0725 196.437 67.0971 196.622C66.2315 196.701 65.3554 196.743 64.4741 196.743C62.0524 196.748 59.6407 196.432 57.3019 195.803C56.1017 195.49 54.9253 195.091 53.7818 194.609C53.6604 194.562 53.5391 194.509 53.4228 194.462C53.3597 194.435 53.3015 194.409 53.2381 194.377C52.742 194.16 52.2514 193.923 51.771 193.675L51.5388 193.553C50.9531 193.247 50.3777 192.919 49.8182 192.571C49.6126 192.444 49.4067 192.312 49.2062 192.175C48.5728 191.757 47.9553 191.308 47.3536 190.838C46.9472 190.532 46.5568 190.205 46.1767 189.867C45.9762 189.698 45.7809 189.513 45.591 189.338C44.8427 188.647 44.1344 187.913 43.4694 187.141C43.2478 186.888 43.0313 186.634 42.8254 186.37C42.7786 186.318 42.7346 186.263 42.6935 186.206C39.2645 181.876 37.202 176.622 36.769 171.114C36.336 165.605 37.5522 160.093 40.2624 155.279C42.9726 150.466 47.054 146.569 51.9862 144.086C56.9183 141.603 62.4776 140.647 67.9551 141.339C73.4326 142.031 78.58 144.34 82.741 147.971C86.9019 151.603 89.8877 156.392 91.3176 161.729C92.7475 167.066 92.5567 172.708 90.7696 177.935C88.9824 183.163 85.6799 187.74 81.2832 191.081V191.081Z" fill="#3F3D56"/>
<path d="M92.2432 261.126C90.8377 257.084 88.5681 253.398 85.5926 250.324C82.6171 247.25 79.0074 244.862 75.0152 243.328C71.023 241.794 66.7444 241.15 62.4778 241.44C58.2112 241.731 54.0594 242.95 50.3118 245.011C46.5642 247.073 43.3111 249.928 40.7794 253.377C38.2476 256.826 36.4983 260.787 35.6532 264.982C34.8081 269.177 34.8876 273.507 35.8863 277.668C36.885 281.829 38.7788 285.723 41.4356 289.076C41.6948 289.409 41.9745 289.742 42.2539 290.062C42.2699 290.085 42.2877 290.107 42.3072 290.128C42.9962 290.921 43.7291 291.675 44.5025 292.385C44.7019 292.572 44.9082 292.765 45.1213 292.945C45.5202 293.304 45.9328 293.644 46.3652 293.97C46.5315 294.103 46.6978 294.236 46.8709 294.363C47.5427 294.875 48.248 295.348 48.9665 295.807C48.9788 295.808 48.9906 295.812 48.9997 295.821C49.2059 295.947 49.419 296.074 49.6318 296.194C49.8313 296.313 50.0375 296.433 50.2373 296.546C50.4235 296.646 50.6031 296.746 50.7896 296.846L51.0355 296.973C51.6079 297.266 52.1864 297.545 52.7854 297.805C52.8517 297.838 52.9251 297.865 52.9982 297.898C53.0515 297.918 53.1047 297.945 53.1577 297.965C53.171 297.971 53.1778 297.971 53.1843 297.978C53.4637 298.091 53.7434 298.204 54.0292 298.311C54.9654 298.669 55.9205 298.976 56.8901 299.23C58.451 299.649 60.0444 299.936 61.6534 300.088C62.5915 300.175 63.5297 300.222 64.4743 300.222C65.4125 300.222 66.3305 300.175 67.2485 300.088C67.548 300.062 67.8472 300.029 68.1467 299.995C69.9248 299.771 71.6792 299.387 73.3891 298.85C73.3941 298.849 73.3988 298.847 73.4024 298.843C74.6663 298.443 75.9002 297.954 77.0949 297.379C77.1014 297.372 77.1079 297.372 77.1147 297.365C77.3808 297.239 77.6403 297.106 77.9064 296.973C77.9498 296.953 77.992 296.931 78.0327 296.906C78.2455 296.799 78.4586 296.686 78.6649 296.573C78.8777 296.46 79.0838 296.34 79.2834 296.214C79.4965 296.1 79.696 295.974 79.9022 295.847C80.0088 295.781 80.1152 295.714 80.2216 295.648C80.3681 295.561 80.5009 295.475 80.6475 295.375C80.8469 295.248 81.0467 295.108 81.2393 294.969C81.4989 294.789 81.7584 294.602 82.0112 294.409C82.0963 294.354 82.1785 294.294 82.2574 294.229C87.1979 290.471 90.8243 285.245 92.6179 279.299C94.4114 273.354 94.2803 266.993 92.2432 261.126L92.2432 261.126ZM81.2861 292.945C81.113 293.084 80.9333 293.218 80.754 293.337C80.5741 293.471 80.4012 293.597 80.2216 293.717C80.0686 293.823 79.9156 293.93 79.7561 294.03C79.7416 294.042 79.726 294.054 79.7093 294.063C79.5963 294.143 79.4764 294.216 79.3634 294.289C79.2835 294.336 79.2039 294.389 79.124 294.436C78.891 294.582 78.6581 294.722 78.4187 294.855C78.2924 294.935 78.1592 295.008 78.0328 295.082C77.9863 295.108 77.9396 295.135 77.8931 295.162C77.6868 295.275 77.4873 295.375 77.2876 295.481C77.2613 295.501 77.2278 295.508 77.208 295.528C77.1956 295.528 77.1837 295.533 77.1745 295.541C76.9218 295.674 76.6623 295.801 76.403 295.921C75.4041 296.402 74.3751 296.818 73.3225 297.166C73.1896 297.212 73.05 297.266 72.9168 297.306C71.2201 297.844 69.4757 298.219 67.7075 298.424C67.5081 298.451 67.3018 298.471 67.0955 298.491C66.2308 298.57 65.3592 298.61 64.4743 298.61C63.6892 298.61 62.8975 298.577 62.1192 298.511C60.492 298.375 58.8801 298.094 57.3027 297.672C56.102 297.358 54.9258 296.958 53.7834 296.473C53.7233 296.447 53.6635 296.427 53.6037 296.4C53.5372 296.373 53.4839 296.353 53.4241 296.327C53.3575 296.3 53.3042 296.273 53.2376 296.24C52.8053 296.054 52.3729 295.847 51.9539 295.634C51.8938 295.601 51.834 295.574 51.7742 295.541L51.5413 295.421C51.4016 295.348 51.2619 295.275 51.1288 295.202C50.6831 294.962 50.2439 294.702 49.8183 294.436C49.6585 294.336 49.4857 294.23 49.3259 294.123L49.206 294.043C48.8334 293.79 48.4611 293.537 48.095 293.264C47.8488 293.078 47.5961 292.898 47.3566 292.705C46.9509 292.399 46.5582 292.072 46.1791 291.733C45.9793 291.566 45.7799 291.38 45.5937 291.207C44.8445 290.516 44.136 289.782 43.4715 289.01C43.2519 288.757 43.0323 288.504 42.826 288.237C42.7796 288.184 42.7396 288.131 42.6929 288.071C39.2631 283.74 37.1999 278.485 36.7665 272.977C36.333 267.468 37.549 261.954 40.2593 257.14C42.9696 252.325 47.0513 248.428 51.984 245.945C56.9167 243.461 62.4767 242.504 67.955 243.196C73.4332 243.888 78.5815 246.197 82.7431 249.829C86.9047 253.461 89.891 258.251 91.3213 263.588C92.7516 268.925 92.5609 274.568 90.7736 279.797C88.9863 285.025 85.6835 289.602 81.2862 292.945H81.2861Z" fill="#3F3D56"/>
<path d="M113.661 117.372C103.424 108.727 90.8965 103.247 77.6034 101.597C64.3102 99.9472 50.8245 102.2 38.7872 108.08C26.75 113.961 16.6802 123.216 9.80317 134.72C2.92617 146.224 -0.461514 159.48 0.0523415 172.875C0.566197 186.271 4.95943 199.228 12.6975 210.17C20.4355 221.112 31.1847 229.568 43.6371 234.508C56.0894 239.447 69.708 240.659 82.8356 237.994C95.9633 235.329 108.034 228.903 117.579 219.498L202.336 291.071C203.627 292.156 205.294 292.685 206.974 292.542C208.653 292.399 210.208 291.595 211.296 290.307C212.384 289.019 212.918 287.351 212.78 285.67C212.641 283.989 211.842 282.431 210.558 281.338L210.549 281.33L125.791 209.758C135.638 195.615 139.852 178.303 137.608 161.214C135.364 144.124 126.824 128.489 113.661 117.372V117.372ZM108.197 202.866C101.594 210.697 92.8192 216.393 82.9814 219.233C73.1437 222.074 62.6853 221.931 52.9288 218.823C43.1722 215.714 34.5558 209.781 28.169 201.772C21.7821 193.763 17.9119 184.039 17.0475 173.828C16.1832 163.618 18.3636 153.381 23.3131 144.411C28.2625 135.441 35.7587 128.141 44.8537 123.434C53.9487 118.728 64.234 116.826 74.409 117.97C84.584 119.113 94.1916 123.251 102.017 129.859V129.859C112.51 138.72 119.057 151.39 120.216 165.081C121.375 178.773 117.052 192.364 108.197 202.866V202.866Z" fill="#3F3D56"/>
<path opacity="0.3" d="M35.2464 209.051C25.3151 200.664 18.8987 188.845 17.2712 175.943C15.6438 163.04 18.9244 149.997 26.4617 139.403C25.4718 140.401 24.5149 141.445 23.591 142.537C19.2067 147.737 15.8888 153.75 13.8267 160.233C11.7646 166.717 10.9986 173.543 11.5725 180.322C12.1464 187.101 14.0489 193.701 17.1715 199.745C20.2941 205.788 24.5755 211.157 29.7713 215.544C34.9672 219.932 40.9757 223.252 47.4538 225.316C53.9319 227.38 60.7527 228.146 67.5268 227.572C74.301 226.998 80.8957 225.094 86.9346 221.969C92.9734 218.844 98.3381 214.559 102.722 209.359C103.644 208.266 104.512 207.146 105.327 206C96.1598 215.218 83.8642 220.648 70.8815 221.214C57.8988 221.779 45.1785 217.437 35.2464 209.051Z" fill="black"/>
<path d="M284.532 293.747C285.194 292.938 285.671 291.993 285.929 290.98C286.187 289.967 286.22 288.909 286.025 287.882C285.831 286.855 285.413 285.883 284.803 285.034C284.192 284.186 283.403 283.481 282.491 282.971L267.042 219.688L255.771 223.288L272.454 286.14C271.699 287.73 271.553 289.542 272.044 291.233C272.535 292.923 273.628 294.375 275.117 295.312C276.606 296.25 278.387 296.609 280.122 296.32C281.857 296.031 283.426 295.116 284.532 293.747H284.532Z" fill="#FFB6B6"/>
<path d="M276.547 253.268L268.311 260.378L256.788 270.319L251.699 244.26L251.167 241.55L250.747 239.4L262.423 219.047L272.156 219.605L272.822 219.645L272.835 219.792L272.988 221.157L274.984 239.12L275.03 239.553L276.547 253.268Z" fill="#3F3D56"/>
<path d="M222.713 430.153L214.557 430.152L210.677 398.668L222.715 398.669L222.713 430.153Z" fill="#FFB6B6"/>
<path d="M224.793 438.065L198.494 438.064V437.731C198.494 435.014 199.573 432.409 201.492 430.488C203.412 428.567 206.016 427.487 208.73 427.487H208.731L224.794 427.488L224.793 438.065Z" fill="#2F2E41"/>
<path d="M307.869 430.819L299.714 430.818L295.833 399.334L307.871 399.335L307.869 430.819Z" fill="#FFB6B6"/>
<path d="M309.95 438.731L283.651 438.73V438.397C283.651 435.68 284.729 433.075 286.649 431.153C288.569 429.232 291.172 428.153 293.887 428.153H293.888L309.95 428.154L309.95 438.731Z" fill="#2F2E41"/>
<path d="M314.389 418.285L292.434 421.614L260.494 313.436L226.571 422.28L201.955 418.951L233.889 292.45V282.463L238.213 267.483L237.761 263.428L234.614 235.072L233.25 222.775L233.162 221.98C233.088 221.314 233.264 220.643 233.657 220.1C234.05 219.556 234.63 219.178 235.286 219.04V219.04L245.532 216.882H262.277L272.156 219.606L272.835 219.792L273.141 219.879L272.988 221.157L270.673 240.585L270.546 241.65L268.311 260.379L267.819 264.487C287.112 278.469 287.777 292.45 287.777 292.45L314.389 418.285Z" fill="#2F2E41"/>
<path d="M251.881 208.459C260.905 208.459 268.221 201.138 268.221 192.106C268.221 183.075 260.905 175.754 251.881 175.754C242.856 175.754 235.541 183.075 235.541 192.106C235.541 201.138 242.856 208.459 251.881 208.459Z" fill="#FFB6B6"/>
<path d="M269.043 260.729L236.719 264.959L237.323 269.581L269.647 265.35L269.043 260.729Z" fill="#3F3D56"/>
<path d="M193.361 266.353C193.671 266.553 193.963 266.777 194.237 267.023L226.208 258.867L228.39 251.148L240.46 252.92L237.926 266.96C237.721 268.094 237.154 269.131 236.31 269.916C235.466 270.7 234.391 271.189 233.246 271.31L195.916 275.244C195.307 276.526 194.323 277.592 193.094 278.301C191.866 279.01 190.451 279.327 189.037 279.211C187.624 279.096 186.279 278.552 185.182 277.652C184.085 276.753 183.287 275.541 182.896 274.177C182.504 272.813 182.536 271.362 182.989 270.017C183.441 268.671 184.292 267.496 185.428 266.647C186.564 265.797 187.932 265.314 189.349 265.262C190.766 265.209 192.166 265.59 193.361 266.353V266.353Z" fill="#FFB6B6"/>
<path d="M242.538 223.208L236.883 218.88C235.354 218.299 233.259 219.948 232.891 221.543L224.908 254.167L241.54 266.151L243.868 262.489L242.538 223.208Z" fill="#3F3D56"/>
<g opacity="0.2">
<path opacity="0.2" d="M274.984 239.12C273.572 239.681 272.134 240.17 270.673 240.585C270.207 240.725 269.728 240.858 269.256 240.984C266.142 241.849 262.943 242.367 259.715 242.529C258.326 242.588 256.935 242.55 255.551 242.416C254.065 242.267 252.597 241.978 251.167 241.55C251.12 241.537 251.067 241.524 251.02 241.51C248.045 240.665 245.318 239.114 243.07 236.989C242.568 236.5 242.099 235.977 241.666 235.425C240.424 233.902 239.513 232.137 238.99 230.242C238.468 228.347 238.346 226.364 238.633 224.419C238.688 224.067 238.764 223.718 238.859 223.374C239.11 222.437 239.441 221.524 239.85 220.644C240.03 220.231 240.229 219.825 240.442 219.426L247.96 216.882H262.277L272.156 219.606L272.822 219.645L272.835 219.792L273.141 219.879L272.988 221.157L274.984 239.12Z" fill="black"/>
</g>
<path d="M239.36 178.568C236.304 178.193 232.95 178.458 230.569 180.411C228.187 182.363 227.418 186.421 229.673 188.519C231.67 190.376 234.791 189.939 237.465 190.467C239.769 190.984 241.833 192.259 243.326 194.089C244.82 195.918 245.657 198.196 245.704 200.558C245.664 207.332 239.168 212.462 238.001 219.135C237.205 223.689 239.124 228.481 242.442 231.698C245.76 234.915 250.321 236.653 254.917 237.124C259.512 237.595 264.159 236.876 268.626 235.694C273.11 234.508 277.526 232.824 281.289 230.11C285.052 227.395 288.137 223.568 289.345 219.086C290.553 214.603 289.686 209.464 286.572 206.023C283.007 202.082 277.076 200.727 273.992 196.398C270.535 191.546 271.814 184.636 269.016 179.376C267.148 175.863 263.611 173.468 259.84 172.206C256.07 170.944 252.044 170.695 248.07 170.573C245.981 170.508 243.829 170.487 241.883 171.249C239.937 172.011 238.226 173.748 238.125 175.837C238.024 177.926 239.36 178.568 239.36 178.568Z" fill="#2F2E41"/>
<path d="M64.0665 149L52 169.18L64.1075 176.36L64.0665 149Z" fill="#8C8C8C"/>
<path d="M76.2151 169.18L64.1075 149L64.1486 176.36L76.2151 169.18Z" fill="#333333"/>
<path d="M52 169.168L64.0929 163.623L64.1075 176.36L52 169.168Z" fill="#383838"/>
<path d="M76.2151 169.166L64.1075 163.623L64.1337 175.888L76.2151 169.166Z" fill="#141414"/>
<path d="M76.2151 171.485L64.1075 178.656V188.546L76.2151 171.485Z" fill="#333333"/>
<path d="M52 171.485L64.1075 178.656V188.546L52 171.485Z" fill="#8C8C8C"/>
<path d="M64.0665 149L52 169.18L64.1075 176.36L64.0665 149Z" fill="#9DD6FF"/>
<path d="M76.279 169.102L64.0612 149L64.1026 176.255L76.279 169.102Z" fill="#333333"/>
<path d="M52 169.168L64.0929 163.623L64.1075 176.36L52 169.168Z" fill="#383838"/>
<path d="M76.279 169.372L64.0612 163.567L64.0876 176.412L76.279 169.372Z" fill="#141414"/>
<path d="M76.2151 171.485L64.1075 178.656V188.546L76.2151 171.485Z" fill="#9DD6FF"/>
<path d="M52 171.485L64.1075 178.656V188.546L52 171.485Z" fill="#8C8C8C"/>
<path d="M64.0665 45L52 65.1796L64.1075 72.3599L64.0665 45Z" fill="#8C8C8C"/>
<path d="M76.2151 65.1796L64.1075 45L64.1486 72.3599L76.2151 65.1796Z" fill="#333333"/>
<path d="M52 65.1685L64.0929 59.6234L64.1075 72.3599L52 65.1685Z" fill="#383838"/>
<path d="M76.2151 65.1657L64.1075 59.6234L64.1337 71.8882L76.2151 65.1657Z" fill="#141414"/>
<path d="M76.2151 67.4854L64.1075 74.6557V84.5461L76.2151 67.4854Z" fill="#333333"/>
<path d="M52 67.4854L64.1075 74.6557V84.5461L52 67.4854Z" fill="#8C8C8C"/>
<path d="M64.0665 45L52 65.1796L64.1075 72.3599L64.0665 45Z" fill="#ADC2B3"/>
<path d="M76.279 65.1023L64.0612 45L64.1026 72.2551L76.279 65.1023Z" fill="#333333"/>
<path d="M52 65.1685L64.0929 59.6234L64.1075 72.3599L52 65.1685Z" fill="#383838"/>
<path d="M76.279 65.3716L64.0612 59.5674L64.0876 72.4117L76.279 65.3716Z" fill="#141414"/>
<path d="M76.2151 67.4854L64.1075 74.6557V84.5461L76.2151 67.4854Z" fill="#ADC2B3"/>
<path d="M52 67.4854L64.1075 74.6557V84.5461L52 67.4854Z" fill="#8C8C8C"/>
<path d="M64.0665 250L52 270.18L64.1075 277.36L64.0665 250Z" fill="#8C8C8C"/>
<path d="M76.2151 270.18L64.1075 250L64.1486 277.36L76.2151 270.18Z" fill="#333333"/>
<path d="M52 270.168L64.0929 264.623L64.1075 277.36L52 270.168Z" fill="#383838"/>
<path d="M76.2151 270.166L64.1075 264.623L64.1337 276.888L76.2151 270.166Z" fill="#141414"/>
<path d="M76.2151 272.485L64.1075 279.656V289.546L76.2151 272.485Z" fill="#333333"/>
<path d="M52 272.485L64.1075 279.656V289.546L52 272.485Z" fill="#8C8C8C"/>
<path d="M64.0665 250L52 270.18L64.1075 277.36L64.0665 250Z" fill="#FFA6A6"/>
<path d="M76.279 270.102L64.0612 250L64.1026 277.255L76.279 270.102Z" fill="#333333"/>
<path d="M52 270.168L64.0929 264.623L64.1075 277.36L52 270.168Z" fill="#383838"/>
<path d="M76.279 270.372L64.0612 264.567L64.0876 277.412L76.279 270.372Z" fill="#141414"/>
<path d="M76.2151 272.485L64.1075 279.656V289.546L76.2151 272.485Z" fill="#FFA6A6"/>
<path d="M52 272.485L64.1075 279.656V289.546L52 272.485Z" fill="#8C8C8C"/>
</svg>

`;

type SearchSVGProps = {
    width?: number,
}

const SearchSVG: React.FC<SearchSVGProps> = ({ width }) => {
    return (
        <SvgXml xml={xml} height={width} width={width}/>
    )
}

export default SearchSVG;