import ApiClient from './ApiClient';

const getAccountTitleMSTList = async (): Promise<any> => {
  const companyCode = sessionStorage.getItem('loginUser.companyCode') || '';
  const response = await ApiClient.get(`/v2/accountTitleMst/list/${companyCode}`, {});
  return response.data;
};

export default getAccountTitleMSTList;
