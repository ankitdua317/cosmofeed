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

export function getCookieValue(key: string) {
  if (typeof window !== "undefined") {
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${key}=`))
      ?.split("=")[1];

    // Cookie value when set to null gets read as a string and hence parsing is required
    return value === "null" ? JSON.parse(value) : value;
  }
}

export const validateMobileNumber = (value: string) => {
  const exp = /^[6-9][0-9]{9}$/;
  return exp.test(value);
};

export const validatePincode = (value: string) => {
  const exp = /^[0-9]{6}$/;
  return exp.test(value);
};

export const validateCityOrState = (value: string) => {
  const exp = /^[a-zA-Z]+$/;
  return exp.test(value);
};
