import {
  Column,
  Entity,
  PrimaryGenratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@entity({ name: "vehicle" })
export class VehicleEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  companyId: string;

  @Column()
  identification: string;

  @Column()
  type: number;

  @Column()
  status: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
