import { CoordinatesRepositoryInMemory } from "../../repositories/in-Memory/CoordinatesRepositoryInMemory";
import { CreateCoordinatesUseCase } from "../createCoordinates/CreateCoordinatesUseCase";
import { ListCoordinatesByUserUseCase } from "./ListCoordinatesByUserUseCase";

let coordinatesRepositoryInMemory: CoordinatesRepositoryInMemory;
let createCoordinatesUseCase: CreateCoordinatesUseCase;
let listCoordinatesUseCase: ListCoordinatesByUserUseCase;

describe("Lists Coordinates by user", () => {
  beforeEach(() => {
    coordinatesRepositoryInMemory = new CoordinatesRepositoryInMemory();
    createCoordinatesUseCase = new CreateCoordinatesUseCase(
      coordinatesRepositoryInMemory
    );
    listCoordinatesUseCase = new ListCoordinatesByUserUseCase(
      coordinatesRepositoryInMemory
    );
  });

  it("should be able to list all coordinates by user", async () => {
    await createCoordinatesUseCase.execute({
      latitude: 123.123,
      longitude: 321.321,
      description: "coordenate teste 1",
      user_id: "123",
    });

    await createCoordinatesUseCase.execute({
      latitude: 789.789,
      longitude: 987.987,
      description: "coordenate teste 2",
      user_id: "123",
    });

    const coordenates = await listCoordinatesUseCase.execute("123");
    expect(coordenates).toHaveLength(2);
  });
});
