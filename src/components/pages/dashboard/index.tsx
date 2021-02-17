import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from 'redux/store';
import { getSessionStorage } from 'utility/browserStorageUtil';

const Dashboard: React.FC = () => {
  const staffName = getSessionStorage('staffName');
  // const { staffName } = useSelector((state: Store) => state.auth);
  return (
    <div>
      StaffName:
      {' '}
      {staffName}
    </div>
  );
};

export default Dashboard;
