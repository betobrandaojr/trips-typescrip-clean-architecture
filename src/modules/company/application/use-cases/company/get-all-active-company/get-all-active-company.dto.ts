export interface GetAllActiveCompanyInputDto {
  id?: string;
  cnpj?: string;
  registeredName?: string;
  tradeName?: string;
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
