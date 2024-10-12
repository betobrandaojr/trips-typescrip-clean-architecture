import { VehicleGateway } from "../../../domain/gateway/entity.gateway";
import { Usecase } from "../use-cases";
import { GetAllActiveVehiclePresenter } from "./presenter/get-all-active-vehicle.presenter";

export interface GetAllActiveVehicleOutputDto {}

export interface GetAllActiveVehicleOutputDto {
  vehicles: {
    id: string;
    companyId: string;
    identification: string;
    type: number;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
