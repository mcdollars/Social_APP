import { Storage, Drivers } from "@ionic/storage";

var storage: any = null;

export const createStore = (name = "__mydb") => {
  storage = new Storage({
    name,
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
  });

  storage.create();
};

export const set = (key : string, val : string) => {
  storage.set(key, val);
};

export const get = async (key : string) => {
  const val = await storage.get(key);
  return val;
};

export const remove = async (key : string) => {
  await storage.remove(key);
};

export const clear = async () => {
  await storage.clear();
};
