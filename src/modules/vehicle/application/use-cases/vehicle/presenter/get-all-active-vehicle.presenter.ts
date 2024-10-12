import { Vehicle } from "../../../../domain/entity/vehicle.entity";
import { GetAllActiveVehicleOutputDto } from "../get-all-active-vehicle";

export class GetAllActiveVehiclePresenter {
  static present(vehicles: Vehicle[]): GetAllActiveVehicleOutputDto {
    return {
      vehicles: vehicles.map((vehicle) => ({
        id: vehicle.id,
        companyId: vehicle.companyId,
        identification: vehicle.identification,
        type: vehicle.type,
        status: vehicle.status,
        createdAt: vehicle.createdAt,
        updatedAt: vehicle.updatedAt,
      })),
    };
  }
}
