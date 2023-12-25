import axios from 'axios';
import { BASE_URL } from './baseUrl';
import { GetType } from './types';
import { useCallback } from 'react';

const GET = ({ endpoint }: GetType) => axios.get(BASE_URL + endpoint);

export const useGET = ({ endpoint }: GetType) => {
  return useCallback(() => GET({ endpoint }), [endpoint]);
};
