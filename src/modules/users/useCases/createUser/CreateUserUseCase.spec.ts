import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Create User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to create a new user", async () => {
    const user = await createUserUseCase.execute({
      email: "teste@teste.com",
      password: "teste",
    });
    expect(user).toHaveProperty("id");
  });

  it("should not be to create a user with email already exist", () => {
    expect(async () => {
      await createUserUseCase.execute({
        email: "teste2@teste2.com",
        password: "teste2",
      });
      await createUserUseCase.execute({
        email: "teste2@teste2.com",
        password: "teste2",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
