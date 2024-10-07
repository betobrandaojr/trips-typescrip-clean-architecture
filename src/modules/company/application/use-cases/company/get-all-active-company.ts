import { CompanyGateway } from "../../domain/gateway/company.gateway";
import { Usecase } from "../use-cases";

export interface GetAllActiveCompanyInputDto {}

export interface GetAllActiveCompanyOutputDto {
  companys: {
    id: string;
    cnpj: string;
    registeredName: string;
    tradeName: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

export class GetAllActiveCompanyUseCase implements Usecase<GetAllActiveCompanyOutputDto, GetAllActiveCompanyUseCase>{
  private constructor(private readonly companyGateway: CompanyGateway){}

  public static create(companyGateway: CompanyGateway) {
    return new GetAllActiveCompanyUseCase(companyGateway);
  }

  public async execute(): Promisse<GetAllActiveCompanyOutputDto>;{
    const iCompanys = await this.companyGateway.getAllActiveCompany();
  }
}
