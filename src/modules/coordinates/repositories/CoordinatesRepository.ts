import { getRepository, Repository } from "typeorm";

import { ICreateCoordinatesDTO } from "../dtos/ICreateCoordinatesDTO";
import { Coordinates } from "../entities/Coordinates";
import { ICoordinatesRepository } from "./ICoordinatesRepository";

export class CoordinatesRepository implements ICoordinatesRepository {
  private repository: Repository<Coordinates>;
  constructor() {
    this.repository = getRepository(Coordinates);
  }

  async create({
    user_id,
    latitude,
    longitude,
    description,
  }: ICreateCoordinatesDTO): Promise<Coordinates> {
    const coordinate = this.repository.create({
      user_id,
      latitude,
      longitude,
      description,
    });

    await this.repository.save(coordinate);

    return coordinate;
  }

  async deleteById(coordinates_id: string): Promise<void> {
    await this.repository.delete(coordinates_id);
  }

  async findByUser(user_id: string): Promise<Coordinates[]> {
    const coordinates = await this.repository.find({
      where: { user_id },
      relations: ["user"],
    });

    return coordinates;
  }
  async updateById(
    coordinates_id: string,
    latitude: number,
    longitude: number,
    description: string
  ): Promise<void> {
    await this.repository.update(coordinates_id, {
      latitude,
      longitude,
      description,
    });
  }
  async findById(coordinates_id: string): Promise<Coordinates> {
    const coordinate = await this.repository.findOne(coordinates_id);

    return coordinate;
  }
}
