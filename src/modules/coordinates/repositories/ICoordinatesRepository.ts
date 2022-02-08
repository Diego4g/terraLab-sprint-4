import { ICreateCoordinatesDTO } from "../dtos/ICreateCoordinatesDTO";
import { Coordinates } from "../entities/Coordinates";

export interface ICoordinatesRepository {
  create({
    user_id,
    latitude,
    longitude,
  }: ICreateCoordinatesDTO): Promise<Coordinates>;
}
