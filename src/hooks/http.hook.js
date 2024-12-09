import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [process, setPropcess] = useState('waiting');

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      setPropcess('loading');

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch (e) {
        setPropcess('error');
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setPropcess('loading');
  }, []);

  return { request, clearError, process, setPropcess };
};
