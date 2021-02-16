export const types = {
  SET_IS_AUTH: 'SET_IS_AUTH',
  SET_STAFF_NAME: 'SET_STAFF_NAME',
  SET_ROLE: 'SET_ROLE',
};

export const setIsAuth = (payload: boolean) => ({
  type: types.SET_IS_AUTH,
  payload,
});
export const setStaffname = (payload: string) => ({
  type: types.SET_STAFF_NAME,
  payload,
});

export type Actions = {
  type: keyof typeof types,
  payload: any
};

// export default Actions;
