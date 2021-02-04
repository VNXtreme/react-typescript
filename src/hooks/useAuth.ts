import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setIsAuthenticated(true);
    // }, 10000);
  }, []);

  return {
    isAuthenticated,
  };
};

export default useAuth;
