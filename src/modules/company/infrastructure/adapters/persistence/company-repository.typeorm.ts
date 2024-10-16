import { EntityManager, Repository, SelectQueryBuilder } from "typeorm";
import { CompanyGateway } from "../../../domain/gateway/company.gateway";
import { Company } from "../../../domain/entity/company.entity";
import { CompanyEntity } from "./company-entity.typeorm";
import { CompanyMapper } from "./company.mapper";

export class CompanyRepository implements CompanyGateway {
  private readonly repository: Repository<CompanyEntity>;

  constructor(private readonly entityManager: EntityManager) {
    this.repository = entityManager.getRepository(CompanyEntity);
  }

  async save(company: Company): Promise<Company> {
    const companyEntity = CompanyMapper.toPersistence(company);
    const savedCompany = await this.repository.save(companyEntity);
    return CompanyMapper.toDomain(savedCompany);
  }

  async getAllActiveCompany(filters?: {
    id?: string;
    cnpj?: string;
    registeredName?: string;
    tradeName?: string;
    page?: number;
    limit?: number;
  }): Promise<Company[]> {
    const query: SelectQueryBuilder<CompanyEntity> =
      this.repository.createQueryBuilder("company");

    if (filters?.id) {
      query.andWhere("company.id = :id", { id: filters.id });
    }
    if (filters?.cnpj) {
      query.andWhere("company.cnpj = :cnpj", { cnpj: filters.cnpj });
    }
    if (filters?.registeredName) {
      query.andWhere("company.registered_name LIKE :registeredName", {
        registeredName: `%${filters.registeredName}%`,
      });
    }
    if (filters?.tradeName) {
      query.andWhere("company.trade_name LIKE :tradeName", {
        tradeName: `%${filters.tradeName}%`,
      });
    }

    query.andWhere("company.status = :status", { status: true });

    const page = filters?.page ?? 1;
    const limit = filters?.limit ?? 10;

    const offset = (page - 1) * limit;

    query.skip(offset).take(limit);

    const companyEntities = await query.getMany();
    return companyEntities.map(CompanyMapper.toDomain);
  }

  async getById(id: string): Promise<Company> {
    const companyEntity = await this.repository.findOne({ where: { id } });

    if (!companyEntity) {
      throw new Error("Company not found.");
    }
    return CompanyMapper.toDomain(companyEntity);
  }
}
