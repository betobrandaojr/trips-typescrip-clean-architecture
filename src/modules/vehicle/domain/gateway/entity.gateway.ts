import { Vehicle } from "../entity/vehicle.entity";

export interface VehicleGateway {
  save(Vehicle: Vehicle): Promise<Vehicle>;
  getByid(id: string): Promise<Vehicle | null>;
  getAllactiveVehicles(): Promise<Vehicle[]>;
  update(Vehicle: Vehicle): Promise<Vehicle>;
  delete(Vehicle: Vehicle): Promise<void>;
}
