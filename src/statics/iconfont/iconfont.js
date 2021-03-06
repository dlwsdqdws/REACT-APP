import { createGlobalStyle } from 'styled-components';

export const GolbalIcon = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* Project id 3138375 */
  src: url('//at.alicdn.com/t/font_3138375_7hw3866ylxa.woff2?t=1642539942339') format('woff2'),
       url('//at.alicdn.com/t/font_3138375_7hw3866ylxa.woff?t=1642539942339') format('woff'),
       url('//at.alicdn.com/t/font_3138375_7hw3866ylxa.ttf?t=1642539942339') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-jiantoushang:before {
  content: "\e62d";
}

.icon-spin:before {
  content: "\e851";
}

.icon-yongyan:before {
  content: "\e600";
}

.icon-fangdajing:before {
  content: "\e617";
}

.icon-Aa:before {
  content: "\e636";
}

`;