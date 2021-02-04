import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import moment from 'moment';

import LoginPage from 'components/pages/login';
import SignUpPage from 'components/pages/signup';
import PrivateRoute from 'PrivateRoute';
import Dashboard from 'components/pages/dashboard';
import { compose } from 'redux';
import routes from './routes';
// momentの日本語設定
moment.locale('ja', {
  months: ['１月', '2月', '3月', '4月', '5月', '６月', '７月', '８月', '９月', '１０月', '１１月', '１２月'],
  weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  weekdaysShort: ['日', '月', '火', '水', '木', '金', '土'],
});

const App: React.FC = () => (
  <Suspense fallback="loading...">
    <Router>
      <Switch>
        {routes.map(({ isPrivate, LoadComponent, ...rest }, i) => {
          if (isPrivate) {
            return (
              <PrivateRoute key={i} {...rest}>
                <LoadComponent />
              </PrivateRoute>
            );
          }

          return (
            <Route key={i} {...rest}>
              <LoadComponent />
            </Route>
          );
        })}
      </Switch>
    </Router>
  </Suspense>
);

export default App;
