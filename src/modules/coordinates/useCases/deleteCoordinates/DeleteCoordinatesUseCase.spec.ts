import { CoordinatesRepositoryInMemory } from "../../repositories/in-Memory/CoordinatesRepositoryInMemory";
import { CreateCoordinatesUseCase } from "../createCoordinates/CreateCoordinatesUseCase";
import { DeleteCoordinatesUseCase } from "./DeleteCoordinatesUseCase";

let coordinatesRepositoryInMemory: CoordinatesRepositoryInMemory;
let createCoordinatesUseCase: CreateCoordinatesUseCase;
let deleteCoordinatesUseCase: DeleteCoordinatesUseCase;

describe("Delete a coordinates", () => {
  beforeEach(() => {
    coordinatesRepositoryInMemory = new CoordinatesRepositoryInMemory();
    createCoordinatesUseCase = new CreateCoordinatesUseCase(
      coordinatesRepositoryInMemory
    );
    deleteCoordinatesUseCase = new DeleteCoordinatesUseCase(
      coordinatesRepositoryInMemory
    );
  });

  it("should be able to delete a coordinete by id", async () => {
    const coordenate = await createCoordinatesUseCase.execute({
      latitude: 123,
      longitude: 321,
      description: "delete coordenate",
      user_id: "321",
    });

    await createCoordinatesUseCase.execute({
      latitude: 123,
      longitude: 321,
      description: "not deleted",
      user_id: "321",
    });
    await deleteCoordinatesUseCase.execute(coordenate.id);

    const deleted = await coordinatesRepositoryInMemory.findById(coordenate.id);

    expect(deleted).toEqual(undefined);
  });
});
