export type TError = {
  data: {
    message: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError | undefined;
  success: boolean;
  message: string;
};
