import { Coordinates } from "../entities/Coordinates";

export class CoordinatesMap {
  static toDTO({ latitude, longitude, description }: Coordinates) {
    return {
      latitude,
      longitude,
      description,
    };
  }
}
