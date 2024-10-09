export interface CreateCompanyInputDto {
  cnpj: string;
  registeredName: string;
  tradeName: string;
}

export interface CreateCompanyOutputDto {
  id: string;
  cnpj: string;
  registeredName: string;
  tradeName: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
