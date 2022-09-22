import { Preferences } from "@capacitor/preferences";

const Store: any = {
  set: async (key: any, value: any) => {
    return await Preferences.set({ key, value: JSON.stringify(value) });
  },
  get: async (key: any) => {
    const value = (await Preferences.get({ key })).value;

    return value
      ? await JSON.parse((await Preferences.get({ key })).value || "")
      : null;
  },
  remove: async (key: any) => {
    return await Preferences.remove({ key });
  },
};

export default Store;
