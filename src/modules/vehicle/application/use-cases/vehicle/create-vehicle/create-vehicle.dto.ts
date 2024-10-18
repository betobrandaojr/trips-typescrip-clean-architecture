export interface CreateVehicleInputDto {
  companyId: string;
  identification: string;
  type: number;
}

export interface CreateVehicleOutputDto {
  id: string;
  companyId: string;
  identification: string;
  type: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
