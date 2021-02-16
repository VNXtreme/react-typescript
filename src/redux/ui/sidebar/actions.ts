export const types = {
  SET_IS_OPEN: 'ui/sidebar/SET_IS_OPEN' as const,
  SET_HIERARCHY: 'ui/sidebar/SET_HIERARCHY' as const,
};

export const setIsOpen = (payload: boolean) => ({
  type: types.SET_IS_OPEN,
  payload,
});

export const setHierarchy = (payload?: any) => ({
  type: types.SET_HIERARCHY,
  payload,
});

export type Actions = (
  | ReturnType<typeof setIsOpen>
  | ReturnType<typeof setHierarchy>
);
