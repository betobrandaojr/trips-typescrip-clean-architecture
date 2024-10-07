import { Company } from "../../../domain/entity/company.entity";
import { CompanyGateway } from "../../../domain/gateway/company.gateway";
import { Usecase } from "../use-cases";

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

      const output = this.presentOutput(iCompany);

      return output;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }

  private presentOutput(company: Company): CreateCompanyOutputDto {
    const output: CreateCompanyOutputDto = {
      id: company.id,
      cnpj: company.cnpj,
      registeredName: company.registeredName,
      tradeName: company.tradeName,
      status: company.status,
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
    };
    return output;
  }
}
