import { Company } from "../../../../domain/entity/company.entity";
import { CompanyGateway } from "../../../../domain/gateway/company.gateway";
import { Usecase } from "../../use-cases";
import { CreateCompanyPresenter } from "../../../../infrastructure/adapters/presenter/create-company.presenter";
import {
  CreateCompanyInputDto,
  CreateCompanyOutputDto,
} from "./create-company.dto";

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

      const output: CreateCompanyOutputDto = {
        id: iCompany.id,
        cnpj: iCompany.cnpj,
        registeredName: iCompany.registeredName,
        tradeName: iCompany.tradeName,
        status: iCompany.status,
        createdAt: iCompany.createdAt,
        updatedAt: iCompany.updatedAt,
      };

      return CreateCompanyPresenter.present(output);
    } catch (error: any) {
      console.error("Error occurred during company creation:", error);
      throw new Error("Failed to create and save company.");
    }
  }
}
