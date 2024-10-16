import { CompanyGateway } from "../../../../domain/gateway/company.gateway";
import { Usecase } from "../../use-cases";
import {
  GetByIdCompanyInputDto,
  GetByIdCompanyOutputDto,
} from "./get-by-id-company.dto";

export class GetByIdCompanyUseCase
  implements Usecase<GetByIdCompanyInputDto, GetByIdCompanyOutputDto>
{
  constructor(private readonly companyGateway: CompanyGateway) {}

  public static create(companyGateway: CompanyGateway) {
    return new GetByIdCompanyUseCase(companyGateway);
  }

  public async execute(
    input: GetByIdCompanyInputDto
  ): Promise<GetByIdCompanyOutputDto> {
    try {
      const company = await this.companyGateway.getById(input.id);

      if (!company) {
        throw new Error("Company not found.");
      }

      return { company };
    } catch (error) {
      console.error("Error occurred during fetching company:", error);
      throw new Error("Failed to fetch companies.");
    }
  }
}
