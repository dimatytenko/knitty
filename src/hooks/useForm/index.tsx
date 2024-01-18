import { useState } from 'react';

export const useForm = (initialData: any) => {
  const [data, setData] = useState<any>(initialData);
  return { data, setData };
};
