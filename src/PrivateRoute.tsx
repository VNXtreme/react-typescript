import React from 'react';
import {
  Route, RouteProps, Redirect,
} from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

// import LoginUserDomain from 'domain/loginUser';
// eslint-disable-next-line import/no-extraneous-dependencies
// import moment from 'moment';
import useAuth from 'hooks/useAuth';

// declare let gRevision: string;
// const REVISION_KEY: string = "EC_APP_REVISION";

// /**
//  * リビジョン管理用 ローカルストレージ保存
//  *
//  * @param obj セッション格納オブジェクト
//  */
// function setLocalStorageRevision(obj: any) {
//   localStorage.setItem(
//     REVISION_KEY,
//     JSON.stringify({ ...JSON.parse(localStorage.getItem(REVISION_KEY) || "{}"), ...obj })
//   );
// }

// /**
//  * リビジョン管理用 ローカルストレージ取得
//  *
//  * @param key
//  * @returns key セッションキー
//  */
// function getLocalStorageRevision(key: string) {
//   if (
//     !JSON.parse(localStorage.getItem(REVISION_KEY) || "{}") ||
//     !JSON.parse(localStorage.getItem(REVISION_KEY) || "{}")[key]
//   ) {
//     return false;
//   }
//   return JSON.parse(localStorage.getItem(REVISION_KEY) || "{}")[key];
// }

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const loginPath: string = '/login';
  // const location = useLocation();
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated', isAuthenticated);
  console.log('...rest', rest);
  if (!children) return null;
  return (
    <Route
      {...rest}
      render={(innerProps: any) => (isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: loginPath,
            state: { from: innerProps.location },
          }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
