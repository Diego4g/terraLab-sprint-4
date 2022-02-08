import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create({ email, password }: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
