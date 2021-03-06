import { ICreateCoordinatesDTO } from "../dtos/ICreateCoordinatesDTO";
import { Coordinates } from "../entities/Coordinates";

export interface ICoordinatesRepository {
  create({
    user_id,
    latitude,
    description,
    longitude,
  }: ICreateCoordinatesDTO): Promise<Coordinates>;
  deleteById(coordinates_id: string): Promise<void>;
  findByUser(user_id: string): Promise<Coordinates[]>;
  findById(coordinates_id: string): Promise<Coordinates>;
  updateById(
    coordinates_id: string,
    latitude: number,
    longitude: number,
    description: string
  ): Promise<void>;
}
