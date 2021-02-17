import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../redux/auth/actions';

/**
 * Check token's validity
 * if valid, set isAuth to True
 */
const useValidateToken = () => {
  const dispatch = useDispatch();
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token') || '';
    if (token) {
      // validate token...
      const isAuthorized = true;
      setTimeout(() => {
        dispatch(setIsAuth(isAuthorized));// token is valid
        setIsTokenChecked(true);
      }, 1000);
    } else {
      // no token, done check
      setIsTokenChecked(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTokenChecked]);

  return {
    isTokenChecked,
  };
};

export default useValidateToken;
