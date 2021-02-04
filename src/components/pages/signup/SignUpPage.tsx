import React from 'react';
import { css } from '@emotion/core';

const styles = {
  formWrapper: css({
    background: '#F2F5F9',
    margin: '3em auto',
    padding: '0 1em',
    maxWidth: '480px',
  }),
  h1: css({
    textAlign: 'center',
    padding: '0 0',
  }),
  h2: css({
    textAlign: 'center',
    padding: '0 0',
  }),
  form: css({
    padding: '0 1.5em',
  }),
  standardLogo: css({
    marginLeft: 'auto',
    marginRight: 'auto',
    verticalAlign: 'middle',
    width: '100px',
    height: '100px',
    padding: '8px 12px',
  }),
};

const SignUpPage: React.FC = () => (
  <div css={styles.formWrapper}>
    <h1>Signup</h1>
    <div>
      <label htmlFor="email">
        Email
        <input type="text" id="email" name="email" />
      </label>

    </div>

    <div>
      <label htmlFor="password">
        Password
        <input type="password" id="password" name="password" />
      </label>

    </div>
  </div>
);

export default SignUpPage;
