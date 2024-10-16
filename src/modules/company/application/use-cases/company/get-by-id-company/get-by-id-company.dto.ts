export interface GetByIdCompanyInputDto {
  id: string;
}

export interface GetByIdCompanyOutputDto {
  company: {
    id: string;
    cnpj: string;
    registeredName: string;
    tradeName: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}
