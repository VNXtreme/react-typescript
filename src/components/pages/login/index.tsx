import React, { useEffect } from 'react';

import { Button } from '@material-ui/core';
import ApiClient from 'api/ApiClient';

const LoginPage: React.FC = () =>
  // useEffect(() => {
  //   async function fetchAPI() {
  //     const params = {
  //       executiveId: 'd531a90d-1ff0-447b-b199-a6b3c5921103',
  //     };
  //     const data = await ApiClient.get('/v1/executive/long', params, {});
  //     console.log('data===', data);
  //   }
  //   fetchAPI();
  // }, []);
  (
    <div>
      <h1>Login</h1>

      <div>
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
        <Button color="primary">Hello World</Button>
      </div>
    </div>
  );
export default LoginPage;
