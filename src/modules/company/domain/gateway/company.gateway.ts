import { Company } from "../entity/company.entity";

export interface CompanyGateway {
  save(Company: Company): Promise<Company>;
  findById(id: string): Promise<Company | null>;
  findAllActive(): Promise<Company[]>;
  update(Company: Company): Promise<Company>;
  delete(Company: Company): Promise<void>;
}
