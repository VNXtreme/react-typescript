export const getLocalStorage = (itemName: string) => JSON.parse(localStorage.getItem(itemName) || '{}');
export const setLocalStorage = (itemName: string, value: string) => { localStorage.setItem(itemName, value); };

export const getSessionStorage = (itemName: string) => JSON.parse(sessionStorage.getItem(itemName) || '{}');
export const setSessionStorage = (itemName: string, value: string) => { sessionStorage.setItem(itemName, value); };
