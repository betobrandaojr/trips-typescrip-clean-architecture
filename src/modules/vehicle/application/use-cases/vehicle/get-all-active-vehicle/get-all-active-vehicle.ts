import { VehicleGateway } from "../../../../domain/gateway/entity.gateway";
import { GetAllActiveVehiclePresenter } from "../../../../infrastructure/adapters/presenter/get-all-active-vehicle.presenter";
import { Usecase } from "../../use-cases";
import {
  GetAllActiveVehicleInputDto,
  GetAllActiveVehicleOutputDto,
} from "./get-all-active-vehicle.dto";

export class GetAllActiveVehicleUseCase
  implements Usecase<GetAllActiveVehicleInputDto, GetAllActiveVehicleOutputDto>
{
  private constructor(private readonly vehicleGateway: VehicleGateway) {}

  public static create(vehicleGateway: VehicleGateway) {
    return new GetAllActiveVehicleUseCase(vehicleGateway);
  }

  public async execute(
    input: GetAllActiveVehicleInputDto
  ): Promise<GetAllActiveVehicleOutputDto> {
    try {
      const vehicles = await this.vehicleGateway.getAllActiveVehicle({
        id: input.id,
        companyId: input.companyId,
        identification: input.identification,
        page: input.page,
        limit: input.limit,
      });

      return GetAllActiveVehiclePresenter.present(vehicles);
    } catch (error) {
      console.error("Error ocurred during fetching companies: ", error);
      throw new Error(" Failed to fetch companies.鬼");
    }
  }
}
