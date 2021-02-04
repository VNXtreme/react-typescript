export const types = {
  SET_IS_AUTH: 'auth/SET_IS_AUTH' as const,
};

export const setIsAuth = (payload: boolean) => ({
  type: types.SET_IS_AUTH,
  payload,
});

export type Actions = (
    | ReturnType<typeof setIsAuth>
);

// export default Actions;
