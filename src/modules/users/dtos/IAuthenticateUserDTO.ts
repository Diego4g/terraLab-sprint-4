import { User } from "../entities/User";

export interface IAuthenticateUserDTO {
  token: string;
  user: Pick<User, "id" | "email">;
}
