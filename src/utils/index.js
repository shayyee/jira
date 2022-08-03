import { useEffect, useState } from "react";

export const cleanObject = (obj) => {
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (!isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const isFalsy = (value) => (value === 0 ? true : !!value);

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce = (func, delay) => {
//   let timer;
//   return (...args) => {
//     if(timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(function () {
//       func(...args)
//     }, delay)
//   }
// }

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次再value变化以后设置一个定时器
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完以后运行这个函数
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
