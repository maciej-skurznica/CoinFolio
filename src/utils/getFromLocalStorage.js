const getFromLocalStorage = (item) => JSON.parse(window.localStorage.getItem(item));

export default getFromLocalStorage;
