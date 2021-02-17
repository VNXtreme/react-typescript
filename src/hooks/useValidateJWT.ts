import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../redux/auth/actions';

const useValidateJWT = () => {
  const dispatch = useDispatch();
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token') || '';
    if (token) {
      // validate token...
      const isValidate = true;
      setTimeout(() => {
        dispatch(setIsAuth(isValidate));
        setIsTokenValidated(isValidate);
      }, 1000);
    } else {
      // no token, set True to skip check
      setIsTokenValidated(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTokenValidated]);

  return {
    isTokenValidated,
  };
};

export default useValidateJWT;
