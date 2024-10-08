import { Company } from "../../../domain/entity/company.entity";
import { CompanyGateway } from "../../../domain/gateway/company.gateway";
import { Usecase } from "../use-cases";
import { CreateCompanyPresenter } from "./presenter/create-company.presenter";

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

export class CreateCompanyUseCase
  implements Usecase<CreateCompanyInputDto, CreateCompanyOutputDto>
{
  constructor(private readonly companyGateway: CompanyGateway) {}

  public static create(companyGateway: CompanyGateway) {
    return new CreateCompanyUseCase(companyGateway);
  }

  public async execute(
    input: CreateCompanyInputDto
  ): Promise<CreateCompanyOutputDto> {
    try {
      const iCompany = Company.create(
        input.cnpj,
        input.registeredName,
        input.tradeName
      );

      await this.companyGateway.save(iCompany);

      const output = CreateCompanyPresenter.present(iCompany);

      return output;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}
