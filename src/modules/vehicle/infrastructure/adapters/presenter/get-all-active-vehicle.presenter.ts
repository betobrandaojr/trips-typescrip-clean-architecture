import { GetAllActiveVehicleOutputDto } from "../../../application/use-cases/vehicle/get-all-active-vehicle/get-all-active-vehicle.dto";
import { Vehicle } from "../../../domain/entity/vehicle.entity";

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
