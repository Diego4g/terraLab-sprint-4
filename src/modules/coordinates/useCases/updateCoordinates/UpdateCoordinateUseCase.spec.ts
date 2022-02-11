import { CoordinatesRepositoryInMemory } from "../../repositories/in-Memory/CoordinatesRepositoryInMemory";
import { CreateCoordinatesUseCase } from "../createCoordinates/CreateCoordinatesUseCase";
import { UpdateCoordinatesUseCase } from "./UpdateCoordinatesUseCase";

let coordinatesRepositoryInMemory: CoordinatesRepositoryInMemory;
let createCoordinatesUseCase: CreateCoordinatesUseCase;
let updateCoordinatesUseCase: UpdateCoordinatesUseCase;

describe("Update a coordinates", () => {
  beforeEach(() => {
    coordinatesRepositoryInMemory = new CoordinatesRepositoryInMemory();
    createCoordinatesUseCase = new CreateCoordinatesUseCase(
      coordinatesRepositoryInMemory
    );
    updateCoordinatesUseCase = new UpdateCoordinatesUseCase(
      coordinatesRepositoryInMemory
    );
  });

  it("should be able to update a coordinate by id", async () => {
    const coordinate = await createCoordinatesUseCase.execute({
      latitude: 432.234,
      longitude: 234.432,
      description: "coordenate teste 1",
      user_id: "123",
    });

    await updateCoordinatesUseCase.execute({
      id: coordinate.id,
      latitude: 111,
    });

    console.log(coordinate);

    expect(coordinate.latitude).toEqual(111);
  });
});
