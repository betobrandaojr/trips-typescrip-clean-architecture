import { CompanyGateway } from "../../../domain/gateway/company.gateway";
import { Usecase } from "../use-cases";
import { GetAllActiveCompanyPresenter } from "./presenter/get-all-active-company.presenter";

export interface GetAllActiveCompanyInputDto {}

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

export class GetAllActiveCompanyUseCase
  implements Usecase<GetAllActiveCompanyInputDto, GetAllActiveCompanyOutputDto>
{
  private constructor(private readonly companyGateway: CompanyGateway) {}

  public static create(companyGateway: CompanyGateway) {
    return new GetAllActiveCompanyUseCase(companyGateway);
  }

  public async execute(): Promise<GetAllActiveCompanyOutputDto> {
    try {
      const companies = await this.companyGateway.getAllActiveCompany();
      return GetAllActiveCompanyPresenter.present(companies);
    } catch (error) {
      throw new Error("Method not implemented!");
    }
  }
}
