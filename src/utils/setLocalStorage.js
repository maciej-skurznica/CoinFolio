export const setLocalStorage = (object) =>
  Object.keys(object).map((key) =>
    window.localStorage.setItem(key.toString(), JSON.stringify(object[key]))
  );
