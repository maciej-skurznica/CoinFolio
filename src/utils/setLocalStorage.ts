const setLocalStorage = (object: any) =>
  Object.keys(object).map((key) =>
    window.localStorage.setItem(key.toString(), JSON.stringify(object[key]))
  );

export default setLocalStorage;
