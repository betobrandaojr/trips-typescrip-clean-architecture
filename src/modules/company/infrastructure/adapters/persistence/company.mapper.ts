import { Company } from "../../../domain/entity/company.entity";
import { CompanyEntity } from "./company-entity.typeorm";

export class CompanyMapper {
  static toDomain(entity: CompanyEntity): Company {
    return Company.restore({
      id: entity.id,
      cnpj: entity.cnpj,
      registeredName: entity.registeredName,
      tradeName: entity.tradeName,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }

  static toPersistence(domain: Company): CompanyEntity {
    const entity = new CompanyEntity();
    entity.id = domain.id;
    entity.cnpj = domain.cnpj;
    entity.registeredName = domain.registeredName;
    entity.tradeName = domain.tradeName;
    entity.status = domain.status;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }
}
