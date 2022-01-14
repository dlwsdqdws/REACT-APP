import { createGlobalStyle } from 'styled-components';

export const GolbalIcon = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* Project id 3138375 */
  src: url('//at.alicdn.com/t/font_3138375_qrdvrdo900f.woff2?t=1642105831662') format('woff2'),
       url('//at.alicdn.com/t/font_3138375_qrdvrdo900f.woff?t=1642105831662') format('woff'),
       url('//at.alicdn.com/t/font_3138375_qrdvrdo900f.ttf?t=1642105831662') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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