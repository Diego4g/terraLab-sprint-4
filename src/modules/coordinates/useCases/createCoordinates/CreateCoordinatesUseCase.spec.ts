import { CoordinatesRepositoryInMemory } from "../../repositories/in-Memory/CoordinatesRepositoryInMemory";
import { CreateCoordinatesUseCase } from "./CreateCoordinatesUseCase";

let coordinatesRepositoryInMemory: CoordinatesRepositoryInMemory;
let createCoordinatesUseCase: CreateCoordinatesUseCase;

describe("Create Coordinates", () => {
  beforeEach(() => {
    coordinatesRepositoryInMemory = new CoordinatesRepositoryInMemory();
    createCoordinatesUseCase = new CreateCoordinatesUseCase(
      coordinatesRepositoryInMemory
    );
  });
  it("should be able to create a new coordinates", async () => {
    const coordinates = await createCoordinatesUseCase.execute({
      latitude: 332,
      longitude: 684,
      description: "teste",
      user_id: "1234",
    });

    expect(coordinates).toHaveProperty("id");
    expect(coordinates.user_id).toEqual("1234");
  });
});
