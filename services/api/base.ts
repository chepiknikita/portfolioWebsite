import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import type { ApiErrorPayload } from '~/types/api';

export type { ApiErrorPayload };

export type ApiResponse<T> = {
  data: ComputedRef<T | null>;
  error: ComputedRef<ApiErrorPayload | null>;
  isLoading: ComputedRef<boolean>;
  isSuccess: ComputedRef<boolean>;
  isError: ComputedRef<boolean>;
  refresh: () => void;
};

export type UseApiOptions<T> = {
  key?: string;
  defaultValue?: T | (() => T);
  onSuccess?: (data: T) => void;
  onError?: (error: ApiErrorPayload) => void;
  immediate?: boolean;
};

export const useApi = <T>(
  url: string | (() => string),
  options: UseApiOptions<T> = {}
): ApiResponse<T> => {
  const {
    key,
    defaultValue,
    onSuccess,
    onError,
    immediate = true
  } = options;

  const { data, error, pending, refresh } = useFetch<T>(url, {
    key,
    default: defaultValue,
    immediate,
    onResponse({ response }) {
      if (response.ok && response._data) {
        onSuccess?.(response._data);
      }
    },
    onResponseError({ response }) {
      if (response._data) {
        const apiError = response._data as ApiErrorPayload;
        onError?.(apiError);
      }
    }
  });

  return {
    data: computed(() => data.value ?? null),
    error: computed(() => error.value ? (error.value.data as ApiErrorPayload) : null),
    isLoading: computed(() => pending.value),
    isSuccess: computed(() => !!data.value && !error.value),
    isError: computed(() => !!error.value),
    refresh
  };
};

export const useApiWithErrorHandling = <T>(
  url: string | (() => string),
  options: UseApiOptions<T> = {}
): ApiResponse<T> => {
  return useApi<T>(url, {
    ...options,
    onError: (error) => {
      const message = error.message || 'Произошла неизвестная ошибка';
      console.error('API Error:', message, error.details);
      options.onError?.(error);
    }
  });
};
