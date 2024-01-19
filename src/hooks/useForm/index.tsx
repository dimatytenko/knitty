import { useState } from 'react';

export const useForm = (initialData: any) => {
  const [data, setData] = useState<object>(initialData);
  const isValidObject = Object.entries(data).reduce(
    (acc, [key, value]: [string, string]) => {
      return { ...acc, [key]: value?.length > 0 };
    },
    {},
  );
  return { data, setData, isValidObject};
};
