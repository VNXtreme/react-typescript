/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

// import PrimaryButton from '../atoms/Button';

interface SampleTemplateProps {
    name: string;
    buttonClick: () => void;
}

const styles = {
  appRoot: css({
    textAlign: 'center',
  }),
  header: css({
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  }),
  link: css({
    color: '#61dafb',
  }),
};

const SampleTemplate: React.FC<SampleTemplateProps> = ({ name, buttonClick }) => (
  <React.Fragment>
    <div css={styles.appRoot}>
      <header css={styles.header} />
    </div>
  </React.Fragment>
);

export default SampleTemplate;
