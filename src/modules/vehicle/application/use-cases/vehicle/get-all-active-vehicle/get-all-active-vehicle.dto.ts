export interface GetAllActiveVehicleInputDto {
  id?: string;
  companyId?: string;
  identification?: string;
  type?: number;
  status?: boolean;
}

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
