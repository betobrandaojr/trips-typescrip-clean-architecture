import { GetAllActiveCompanyUseCase } from "../../../../../../application/use-cases/company/get-all-active-company/get-all-active-company";
import {
  GetAllActiveCompanyInputDto,
  GetAllActiveCompanyOutputDto,
} from "../../../../../../application/use-cases/company/get-all-active-company/get-all-active-company.dto";
import { HttpMethod, Route } from "../routes";
import { Request, Response } from "express";

export type ListCompanyResponseDto = {
  Companies: {
    id: string;
    cnpj: string;
    registeredName: string;
    tradeName: string;
  }[];
};

export class GetAllCompanyRoute implements Route {
  constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly listCompanyService: GetAllActiveCompanyUseCase
  ) {}

  public static create(listCompanyService: GetAllActiveCompanyUseCase) {
    return new GetAllCompanyRoute(
      "/company",
      HttpMethod.GET,
      listCompanyService
    );
  }

  public getHandler() {
    return async (request: Request, response: Response) => {
      const { id, cnpj, registeredName, tradeName, page, limit } =
        request.query;

      const input: GetAllActiveCompanyInputDto = {
        id: typeof id === "string" ? id : undefined,
        cnpj: typeof cnpj === "string" ? cnpj : undefined,
        registeredName:
          typeof registeredName === "string" ? registeredName : undefined,
        tradeName: typeof tradeName === "string" ? tradeName : undefined,
        page:
          page && !Array.isArray(page) && !isNaN(Number(page))
            ? Number(page)
            : 1,
        limit:
          limit && !Array.isArray(limit) && !isNaN(Number(limit))
            ? Number(limit)
            : 10,
      };

      try {
        const output = await this.listCompanyService.execute(input);
        const responseBody = this.present(output);
        response.status(200).json(responseBody);
      } catch (error) {
        console.error("Error fetching companies:", error);
        response.status(500).json({ message: "Failed to fetch companies." });
      }
    };
  }

  public getPath(): string {
    return this.path;
  }

  public getMethod(): HttpMethod {
    return this.method;
  }

  private present(
    output: GetAllActiveCompanyOutputDto
  ): ListCompanyResponseDto {
    return {
      Companies: output.companies.map((company) => ({
        id: company.id,
        cnpj: company.cnpj,
        registeredName: company.registeredName,
        tradeName: company.tradeName,
      })),
    };
  }
}
