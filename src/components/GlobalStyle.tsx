import React from 'react';
import { Global, css } from '@emotion/core';
// import { utilityColor } from 'components/styles';

const globalStyle = css('');

const GlobalStyle: React.FC = () => (
  <Global
    styles={globalStyle}
  />
);

export default GlobalStyle;
