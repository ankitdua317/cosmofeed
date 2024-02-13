import { ProductCarousalImage } from "@/models/Home";
import { storageInUse } from "./localStorage";

export const getAllImages = (list: ProductCarousalImage[]) => {
  const res: string[] = [];
  list.forEach(({ images }) => {
    res.push(...images);
  });
  return res;
};

export function getLocalStorageKey<T, K>(key: string, defaultValue?: K) {
  const value = storageInUse.getItem(key);
  return value ? (JSON.parse(value) as T) : defaultValue;
}

export function setLocalStorageKey<T>(key: string, value: T) {
  storageInUse.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageKey(key: string) {
  storageInUse.removeItem(key);
}
