import { useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

type UseApiOptions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: AxiosError) => void;
};

export const useApi = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  const request = async (
    config: AxiosRequestConfig,
    options?: UseApiOptions<T>
  ) => {
    setLoading(true);
    try {
      const response = await axios(config);
      setData(response.data);
      options?.onSuccess?.(response.data);
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError);
      options?.onError?.(axiosError);
      throw axiosError;
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};
