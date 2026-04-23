import { useMutation } from "@tanstack/react-query";
import { RegisterApi } from "../api/api";

export function useCreateAuth() {
  const { mutate, data, error, isPending } = useMutation({
    mutationFn: RegisterApi.createUser,
  });

  return {
    createUser: mutate,
    LoginAuthResponse: data,
    error,
    isPending,
  };
}
