import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async create({ email, password }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ email, password });

    await this.repository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });

    return user;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
