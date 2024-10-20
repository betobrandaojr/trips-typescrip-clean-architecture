import { EntityManager, Repository, SelectQueryBuilder } from "typeorm";
import { VehicleGateway } from "../../../domain/gateway/entity.gateway";
import { Vehicle } from "../../../domain/entity/vehicle.entity";
import { VehicleEntity } from "./vehicle-entity.typeorm";
import { VehicleMapper } from "./vehicle.mapper";

export class VehicleRepository implements VehicleGateway {
  private readonly repository: Repository<VehicleEntity>;

  constructor(private readonly entityManager: EntityManager) {
    this.repository = entityManager.getRepository(VehicleEntity);
  }

  async save(vehicle: Vehicle): Promise<Vehicle> {
    const vehicleEntity = VehicleMapper.toPersistence(vehicle);
    const savedVehicle = await this.repository.save(vehicleEntity);
    return VehicleMapper.toDomain(savedVehicle);
  }

  async GetAllActiveVehicle(filters?: {
    id?: string;
    companyId?: string;
    identification?: string;
    page?: number;
    limit?: number;
  }): Promise<Vehicle[]> {
    const query: SelectQueryBuilder<VehicleEntity> =
      this.repository.createQueryBuilder("vehicle");

    if (filters?.id) {
      query.andWhere("vehicle.id = :id", { id: filters.id });
    }
    if (filters?.companyId) {
      query.andWhere("vehicle.companyId = :companyId", {
        companyId: filters.companyId,
      });
    }
    if (filters?.identification) {
      query.andWhere("vehicle.identification = :identification", {
        identification: filters.identification,
      });
    }

    query.andWhere("vehicle.status = :status", { status: true });

    const page = filters?.page ?? 1;
    const limit = filters?.limit ?? 10;

    const offset = (page - 1) * limit;

    query.skip(offset).take(limit);

    const vehicleEntities = await query.getMany();
    return vehicleEntities.map(VehicleMapper.toDomain);
  }
}
