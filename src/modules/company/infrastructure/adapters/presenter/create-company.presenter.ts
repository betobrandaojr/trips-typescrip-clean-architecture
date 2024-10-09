import { CreateCompanyOutputDto } from "../../../application/use-cases/company/create-company/create-company.dto";

export class CreateCompanyPresenter {
  static present(company: CreateCompanyOutputDto): CreateCompanyOutputDto {
    return company;
  }
}
