import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private repository: IUsersRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.repository.deleteById(id);
  }
}
