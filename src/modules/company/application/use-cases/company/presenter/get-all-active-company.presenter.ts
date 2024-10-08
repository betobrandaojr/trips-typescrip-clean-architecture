import { Company } from "../../../../domain/entity/company.entity";
import { GetAllActiveCompanyOutputDto } from "../get-all-active-company";

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
