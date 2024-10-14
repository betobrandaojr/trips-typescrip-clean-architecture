import { CreateCompanyUseCase } from "./modules/company/application/use-cases/company/create-company/create-company.use-case";
import { ApiExpress } from "./modules/company/infrastructure/adapters/api/express/express.api";
import { CreateCompanyRoute } from "./modules/company/infrastructure/adapters/api/express/routes/company/create-company.express-route";
import { CompanyRepository } from "./modules/company/infrastructure/adapters/persistence/company-repository.typeorm";
import { AppDataSource } from "./shared/database/type-orm/typeorm.config";

async function main() {
  await AppDataSource.initialize();

  const entityManager = AppDataSource.manager;
  const companyRepository = new CompanyRepository(entityManager);

  const createCompanyUseCase = new CreateCompanyUseCase(companyRepository);

  const createRoute = CreateCompanyRoute.create(createCompanyUseCase);

  const api = ApiExpress.create([createRoute]);
  const port = 8000;
  api.start(port);
}

main();
