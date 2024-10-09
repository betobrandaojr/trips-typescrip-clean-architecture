import { Company } from "../entity/company.entity";

export interface CompanyGateway {
  save(Company: Company): Promise<Company>;
  getById(id: string): Promise<Company | null>;
  getAllActiveCompany(filters?: {
    id?: string;
    cnpj?: string;
    registeredName?: string;
    tradeName?: string;
  }): Promise<Company[]>;
  update(Company: Company): Promise<Company>;
  delete(Company: Company): Promise<void>;
}
