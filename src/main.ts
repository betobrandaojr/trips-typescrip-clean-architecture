import { CreateCompanyUseCase } from "./modules/company/application/use-cases/company/create-company/create-company.use-case";
import { GetAllActiveCompanyUseCase } from "./modules/company/application/use-cases/company/get-all-active-company/get-all-active-company";
import { GetByIdCompanyUseCase } from "./modules/company/application/use-cases/company/get-by-id-company/get-by-id-company";
import { ApiExpress } from "./modules/company/infrastructure/adapters/api/express/express.api";
import { CreateCompanyRoute } from "./modules/company/infrastructure/adapters/api/express/routes/company/create-company.express-route";
import { GetAllCompanyRoute } from "./modules/company/infrastructure/adapters/api/express/routes/company/get-all-company.express-route";
import { GetByIdRoute } from "./modules/company/infrastructure/adapters/api/express/routes/company/get-by-id-company.express-route";
import { CompanyRepository } from "./modules/company/infrastructure/adapters/persistence/company-repository.typeorm";
import { AppDataSource } from "./shared/database/type-orm/typeorm.config";

async function main() {
  await AppDataSource.initialize();

  const entityManager = AppDataSource.manager;
  const companyRepository = new CompanyRepository(entityManager);

  const createCompanyUseCase = new CreateCompanyUseCase(companyRepository);
  const getAllActiveCompany = new GetAllActiveCompanyUseCase(companyRepository);
  const getByIdCompany = new GetByIdCompanyUseCase(companyRepository);

  const createRoute = CreateCompanyRoute.create(createCompanyUseCase);
  const listRoute = GetAllCompanyRoute.create(getAllActiveCompany);
  const getByIdRoute = GetByIdRoute.create(getByIdCompany);

  const api = ApiExpress.create([createRoute, listRoute, getByIdRoute]);
  const port = 8000;
  console.log(`Starting application...${port} `);
  api.start(port);
}

main();
