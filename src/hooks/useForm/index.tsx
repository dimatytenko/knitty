import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(initialData:T) => {
  const [data, setData] = useState(initialData);
  const isValidObject = Object.entries(data).reduce(
    (acc, [key, value]: [string, string]) => {
      return { ...acc, [key]: value?.length > 0 };
    },
    {},
  );
  return { data, setData, isValidObject };
};
