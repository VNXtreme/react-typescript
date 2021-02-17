export const getLocalStorage = (itemName: string) => localStorage.getItem(itemName) || '';
export const setLocalStorage = (itemName: string, value: string) => { localStorage.setItem(itemName, value); };

export const getSessionStorage = (itemName: string) => sessionStorage.getItem(itemName) || '';
export const setSessionStorage = (itemName: string, value: string) => { sessionStorage.setItem(itemName, value); };
