export const getFromLocalStorage = (item) =>
  JSON.parse(window.localStorage.getItem(item));