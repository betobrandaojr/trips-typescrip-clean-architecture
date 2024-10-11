export interface GetAllActiveCompanyInputDto {
  id?: string;
  cnpj?: string;
  registeredName?: string;
  tradeName?: string;
  page?: number;
  limit?: number;
}

export interface GetAllActiveCompanyOutputDto {
  companies: {
    id: string;
    cnpj: string;
    registeredName: string;
    tradeName: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
