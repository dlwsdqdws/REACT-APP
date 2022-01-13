import { createGlobalStyle } from 'styled-components';

export const GolbalIcon = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 3138375 */
    src: url('');
    src: url('?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_3138375_bthle3e5bf.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_3138375_bthle3e5bf.woff') format('woff'),
    url('//at.alicdn.com/t/font_3138375_bthle3e5bf.ttf') format('truetype'),
    url('#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  `
