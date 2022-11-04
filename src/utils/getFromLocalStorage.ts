const getFromLocalStorage = (item: string) =>
  JSON.parse(window.localStorage.getItem(item)!);

export default getFromLocalStorage;
