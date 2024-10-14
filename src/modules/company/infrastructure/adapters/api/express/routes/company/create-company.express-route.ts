import { CreateCompanyUseCase } from "../../../../../../application/use-cases/company/create-company/create-company.use-case";
import { HttpMethod, Route } from "../routes";
import { CreateCompanyInputDto } from "../../../../../../application/use-cases/company/create-company/create-company.dto";
import { Request, Response } from "express";

export interface CreateCompanyResponseDto {
  id: string;
}

export class CreateCompanyRoute implements Route {
  constructor(
    private readonly path: string,
    private readonly method: HttpMethod,
    private readonly createCompanyService: CreateCompanyUseCase
  ) {}

  public static create(createCompanyService: CreateCompanyUseCase) {
    return new CreateCompanyRoute(
      "/company",
      HttpMethod.POST,
      createCompanyService
    );
  }

  public getHandler() {
    return async (request: Request, response: Response) => {
      const { cnpj, registeredName, tradeName } = request.body;

      const input: CreateCompanyInputDto = {
        cnpj,
        registeredName,
        tradeName,
      };

      const output = await this.createCompanyService.execute(input);

      const responseBody = this.present(output);

      response.status(201).json(responseBody);
    };
  }

  public getPath(): string {
    return this.path;
  }

  public getMethod(): HttpMethod {
    return this.method;
  }

  private present(input: CreateCompanyResponseDto): CreateCompanyResponseDto {
    return {
      id: input.id,
    };
  }
}
