import { useEffect, useState } from "react";
import {
  getCookieValue,
  getLocalStorageKey,
  setLocalStorageKey,
} from "@/utils/common";
import {
  COOKIE_MAX_AGE_7DAYS,
  PAGE_HASH_COOKIE_NAME,
} from "@/constants/common";

const usePageCache = <T>(key: string, initialData: T) => {
  const [data, setData] = useState<T>(initialData);

  useEffect(() => {
    const getFromStorage = async () => {
      const dataFromStorage = getLocalStorageKey<T, null>(key);
      if (dataFromStorage) {
        setData(dataFromStorage);
      }
    };

    if (initialData) {
      setLocalStorageKey(key, initialData);
    } else {
      getFromStorage();
    }
  }, [key, initialData]);

  useEffect(() => {
    const cookieVal: string = getCookieValue(PAGE_HASH_COOKIE_NAME);
    const cookieValArr = cookieVal?.split(",") || [];
    if (!cookieValArr.includes(key)) {
      cookieValArr.push(key);
      document.cookie = `${PAGE_HASH_COOKIE_NAME}=${cookieValArr.join(
        ","
      )}; max-age=${COOKIE_MAX_AGE_7DAYS}; path=/`;
    }
  }, [key]);

  return { data };
};

export default usePageCache;
