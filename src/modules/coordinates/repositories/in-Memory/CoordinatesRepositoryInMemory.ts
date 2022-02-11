import { ICreateCoordinatesDTO } from "../../dtos/ICreateCoordinatesDTO";
import { Coordinates } from "../../entities/Coordinates";
import { ICoordinatesRepository } from "../ICoordinatesRepository";

export class CoordinatesRepositoryInMemory implements ICoordinatesRepository {
  private coordinates: Coordinates[] = [];
  async create({
    user_id,
    latitude,
    longitude,
    description,
  }: ICreateCoordinatesDTO): Promise<Coordinates> {
    const coordinates = new Coordinates();
    Object.assign(coordinates, {
      user_id,
      latitude,
      longitude,
      description,
    });
    this.coordinates.push(coordinates);
    return coordinates;
  }

  async deleteById(coordinates_id: string): Promise<void> {
    this.coordinates.filter((coord) => coord.id !== coordinates_id);
  }
}
