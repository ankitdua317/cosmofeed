const _data = new Map<string, string>();

export let storageInUse: Storage;

const initFallBackStorage = () => {
  return {
    getItem(key: string) {
      if (_data.has(key)) {
        return _data.get(key) ?? null;
      }
      return null;
    },

    setItem(key: string, value: string) {
      _data.set(key, value);
    },

    removeItem(key: string) {
      _data.delete(key);
    },

    clear() {
      _data.clear();
    },

    key(index: number): string | null {
      const keys = Array.from(_data.keys());
      if (typeof index !== "number" || index < 0 || index >= keys.length) {
        return null;
      }
      return keys[index];
    },

    get length(): number {
      return _data.size;
    },
  };
};

(function () {
  try {
    const storage = window.localStorage;
    // Verify there are no QuotaExceededErrors or DOMExceptions
    const storageTest = "__storage_test__";
    storage.setItem(storageTest, storageTest);
    storage.removeItem(storageTest);
    storageInUse = localStorage;
  } catch (e) {
    storageInUse = initFallBackStorage();
  }
})();
