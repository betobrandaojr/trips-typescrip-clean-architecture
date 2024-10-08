import { Company } from "../../../../domain/entity/company.entity";
import { CreateCompanyOutputDto } from "../create-company.use-case";
//

export class CreateCompanyPresenter {
  static present(company: Company): CreateCompanyOutputDto {
    return {
      id: company.id,
      cnpj: company.cnpj,
      registeredName: company.registeredName,
      tradeName: company.tradeName,
      status: company.status,
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
    };
  }
}
