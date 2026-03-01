export type ApiErrorPayload = {
  status: number;
  code: string;
  message: string;
  details?: unknown;
};
