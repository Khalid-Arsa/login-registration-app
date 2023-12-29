export const useStorage = {
  setItem: (key: string, value: any) => {
    try {
      return localStorage.setItem(key, value);
    } catch (e) {
      console.log({ "`Storage Util Error\nSet Item`": e });
    }
  },
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.log({ "`Storage Util Error\nGet Item:`": e });
    }
  },
  removeItem: (key: string) => {
    try {
      return localStorage.removeItem(key);
    } catch (e) {
      console.log({ "`Storage Util Error.\nRemove Item:`": e });
    }
  },
  multiRemove: (keys: Array<any> = []) => {
    try {
      return localStorage.multiRemove(keys);
    } catch (e) {
      console.log({ "`Storage Util Error.\nMulti Remove Item:`": e });
    }
  },
  multiGet: (keys: Array<any> = []) => {
    try {
      return localStorage.multiGet(keys);
    } catch (e) {
      console.log({ "`Storage Util Error.Multi Get Item:`": e });
    }
  },
};
