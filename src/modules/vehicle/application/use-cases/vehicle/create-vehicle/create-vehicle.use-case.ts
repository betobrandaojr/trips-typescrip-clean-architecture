import { Vehicle } from "../../../../domain/entity/vehicle.entity";
import { VehicleGateway } from "../../../../domain/gateway/entity.gateway";
import { Usecase } from "../../use-cases";
import { CreateVehiclePresenter } from "../../../../infrastructure/adapters/presenter/create-vehicle.presenter";
import {
  CreateVehicleInputDto,
  CreateVehicleOutputDto,
} from "./create-vehicle.dto";

export class CreateVehicleUseCase
  implements Usecase<CreateVehicleInputDto, CreateVehicleOutputDto>
{
  constructor(private readonly vehicleGateway: VehicleGateway) {}

  public static create(vehicleGateway: VehicleGateway) {
    return new CreateVehicleUseCase(vehicleGateway);
  }

  public async execute(
    input: CreateVehicleInputDto
  ): Promise<CreateVehicleOutputDto> {
    try {
      const iVehicle = Vehicle.create(
        input.companyId,
        input.identification,
        input.type
      );
      await this.vehicleGateway.save(iVehicle);

      const output: CreateVehicleOutputDto = {
        id: iVehicle.id,
        companyId: iVehicle.companyId,
        identification: iVehicle.identification,
        type: iVehicle.type,
        status: iVehicle.status,
        createdAt: iVehicle.createdAt,
        updatedAt: iVehicle.updatedAt,
      };
      return CreateVehiclePresenter.present(output);
    } catch (error: any) {
      console.error("Error ocurred during creating vehicle: ", error);
      throw new Error(" Failed to create vehicle.");
    }
  }
}
