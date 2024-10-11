import { CompanyGateway } from "../../../../domain/gateway/company.gateway";
import { GetAllActiveCompanyPresenter } from "../../../../infrastructure/adapters/presenter/get-all-active-company.presenter";
import { Usecase } from "../../use-cases";
import {
  GetAllActiveCompanyInputDto,
  GetAllActiveCompanyOutputDto,
} from "./get-all-active-company.dto";

export class GetAllActiveCompanyUseCase
  implements Usecase<GetAllActiveCompanyInputDto, GetAllActiveCompanyOutputDto>
{
  private constructor(private readonly companyGateway: CompanyGateway) {}

  public static create(companyGateway: CompanyGateway) {
    return new GetAllActiveCompanyUseCase(companyGateway);
  }

  public async execute(
    input: GetAllActiveCompanyInputDto
  ): Promise<GetAllActiveCompanyOutputDto> {
    try {
      const companies = await this.companyGateway.getAllActiveCompany({
        id: input.id,
        cnpj: input.cnpj,
        registeredName: input.registeredName,
        tradeName: input.tradeName,
        page: input.page,
        limit: input.limit,
      });

      return GetAllActiveCompanyPresenter.present(companies);
    } catch (error) {
      console.error("Error occurred during fetching companies:", error);
      throw new Error("Failed to fetch companies.");
    }
  }
}
