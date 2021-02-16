import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AccountInfo } from '@azure/msal-browser';
import { setIsAuth, setStaffname } from '../redux/auth/actions';
import AzureAuthenticationButton from '../azure/azure-authentication-component';

const useAuth = () => {
  // current authenticated user
  const [currentUser, setCurrentUser] = useState<AccountInfo>();

  // authentication callback
  const onAuthenticated = async (userAccountInfo: AccountInfo) => {
    setCurrentUser(userAccountInfo);
  };

  const dispatch = useDispatch();

  const signin = (email: string, password: string) => new Promise((resolve) => {
    setTimeout(() => {
      // connect AD
      // then
      dispatch(setIsAuth(true));
      dispatch(setStaffname('authorizedStaffName'));
      resolve('authorizedStaffName');
    }, 2000);
  });

  const signup = (email: string, password: string) => {
    setTimeout(() => {
      // connect AD
      // then
      dispatch(setIsAuth(true));
      dispatch(setStaffname('authorizedStaffName'));
      return 'authorizedStaffName';
    }, 2000);
  };

  const signout = () => {
    setTimeout(() => {
      // connect AD
      // then
      dispatch(setStaffname(''));
      dispatch(setIsAuth(false));
      return '';
    }, 1000);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   setIsAuthenticated(true);
    // }, 10000);
  }, []);

  return {
    signin,
    signup,
    signout,
    onAuthenticated,
  };
};

export default useAuth;
