import { CreateVehicleOutputDto } from "../../../application/use-cases/vehicle/create-vehicle/create-vehicle.dto";

export class CreateVehiclePresenter {
  static present(vehicle: CreateVehicleOutputDto): CreateVehicleOutputDto {
    return vehicle;
  }
}
