import { GetByIdCompanyUseCase } from "../../../../../../application/use-cases/company/get-by-id-company/get-by-id-company";
import { GetByIdCompanyOutputDto } from "../../../../../../application/use-cases/company/get-by-id-company/get-by-id-company.dto";
import { HttpMethod, Route } from "../routes";
import { Request, Response } from "express";

export type getByIdCompanyResponseDto = {
  Company: {
    id: string;
    cnpj: string;
    registeredName: string;
    tradeName: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
};

export class GetByIdRoute implements Route {
  constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly getByidCompanyService: GetByIdCompanyUseCase
  ) {}

  public static create(getByidCompanyService: GetByIdCompanyUseCase) {
    return new GetByIdRoute(
      "/company/:id",
      HttpMethod.GET,
      getByidCompanyService
    );
  }

  public getHandler() {
    return async (request: Request, response: Response) => {
      const { id } = request.params;

      const input = { id };

      try {
        const output = await this.getByidCompanyService.execute(input);
        const responseBody = this.present(output);
        response.status(200).json(responseBody);
      } catch (error) {
        console.error("Error fetching Company:", error);
        response.status(500).json({ message: "Failed to fetch Company." });
      }
    };
  }

  public getPath(): string {
    return this.path;
  }

  public getMethod(): HttpMethod {
    return this.method;
  }

  private present(output: GetByIdCompanyOutputDto): getByIdCompanyResponseDto {
    return {
      Company: {
        id: output.company.id,
        cnpj: output.company.cnpj,
        registeredName: output.company.registeredName,
        tradeName: output.company.tradeName,
        status: output.company.status,
        createdAt: output.company.createdAt,
        updatedAt: output.company.updatedAt,
      },
    };
  }
}
