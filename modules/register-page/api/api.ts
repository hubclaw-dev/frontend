import { jsonApiInstance } from "@/shared/api/api-instance";

const BASE_URL = "https://api-staging.hubclaw.io";

export type UserCreatedApi = {
  user_id: string;
  is_new: boolean;
};

export type CreateUserDto = {
  id_token: string;
};

export const RegisterApi = {
  createUser: (data: CreateUserDto) => {
    return jsonApiInstance<UserCreatedApi>(`/v1/auth/login`, {
      method: "POST",
      json: data,
    });
  },
};
