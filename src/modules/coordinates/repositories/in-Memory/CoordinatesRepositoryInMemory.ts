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

  async findByUser(user_id: string): Promise<Coordinates[]> {
    const coordenadas = this.coordinates.filter(
      (coord) => coord.user_id === user_id
    );

    return coordenadas;
  }

  async findById(coordinates_id: string): Promise<Coordinates> {
    const coordinate = this.coordinates.find(
      (coord) => coord.id === coordinates_id
    );

    return coordinate;
  }

  async updateById(
    coordinates_id: string,
    latitude: number,
    longitude: number,
    description: string
  ): Promise<void> {
    const coordinate = this.coordinates.find(
      (coord) => coord.id === coordinates_id
    );

    coordinate.latitude = latitude;
    coordinate.longitude = longitude;
    coordinate.description = description;
  }
}
