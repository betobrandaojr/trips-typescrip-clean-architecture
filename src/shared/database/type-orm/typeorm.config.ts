import { DataSource } from "typeorm";
import { CompanyEntity } from "../../../modules/company/infrastructure/adapters/persistence/company-entity.typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  entities: [CompanyEntity],
  //synchronize: true,
  //logging: true,
});
