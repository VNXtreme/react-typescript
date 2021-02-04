import { useEffect, useState } from 'react';

const useLoginUser = () => {
  const [staffName, setStaffName] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('login.shopCode')) {
      setStaffName(sessionStorage.getItem('login.shopName') || '');
    } else {
      setStaffName(sessionStorage.getItem('loginUser.staffName') || '');
    }
  }, []);

  return {
    staffName,
  };
};

export default useLoginUser;
