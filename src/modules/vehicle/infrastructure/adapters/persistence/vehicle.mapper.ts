import { Vehicle } from "../../../domain/entity/vehicle.entity";
import { VehicleEntity } from "./vehicle-entity.typeorm";

export class VehicleMapper {
  static toDomain(entity: VehicleEntity): Vehicle {
    return Vehicle.restore({
      id: entity.id,
      companyId: entity.companyId,
      identification: entity.identification,
      type: entity.type,
      status: entity.status,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }

  static toPersistence(domain: Vehicle): VehicleEntity {
    const entity = new VehicleEntity();
    entity.id = domain.id;
    entity.companyId = domain.companyId;
    entity.identification = domain.identification;
    entity.type = domain.type;
    entity.status = domain.status;
    entity.createdAt = domain.createdAt;
    entity.updatedAt = domain.updatedAt;
    return entity;
  }
}
