import { GetAllActiveCompanyOutputDto } from "../../../application/use-cases/company/get-all-active-company/get-all-active-company.dto";
import { Company } from "../../../domain/entity/company.entity";

export class GetAllActiveCompanyPresenter {
  static present(companies: Company[]): GetAllActiveCompanyOutputDto {
    return {
      companies: companies.map((company) => ({
        id: company.id,
        cnpj: company.cnpj,
        registeredName: company.registeredName,
        tradeName: company.tradeName,
        status: company.status,
        createdAt: company.createdAt,
        updatedAt: company.updatedAt,
      })),
    };
  }
}
