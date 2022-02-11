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
}
