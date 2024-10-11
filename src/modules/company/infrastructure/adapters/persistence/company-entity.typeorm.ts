import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "company" })
export class CompanyEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 14, unique: true })
  cnpj!: string;

  @Column({ length: 255, name: "registered_name" })
  registeredName!: string;

  @Column({ length: 255, name: "trade_name" })
  tradeName!: string;

  @Column({ default: true })
  status!: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;
}
