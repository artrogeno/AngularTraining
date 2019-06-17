const getStorage = (key) => {
  const storage = JSON.parse(sessionStorage.getItem(key));
  if (storage) {
    return storage;
  }
};

const setStorage = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const removeStorage = (key) => {
  sessionStorage.removeItem(key);
};

const clearStorage = () => {
  sessionStorage.clear();
};

export { getStorage, setStorage, removeStorage, clearStorage };
