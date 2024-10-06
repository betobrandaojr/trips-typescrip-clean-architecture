import { Company } from "../entity/company.entity";

export interface CompanyRepository {
  findById(id: string): Promise<Company | null>;
  findAllActive(): Promise<Company[]>;
  save(Company: Company): Promise<Company>;
  update(Company: Company): Promise<Company>;
  delete(Company: Company): Promise<void>;
}
