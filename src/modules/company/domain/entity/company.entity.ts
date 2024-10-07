export interface CompanyProps {
  id: string;
  cnpj: string;
  registeredName: string;
  tradeName: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class Company {
  private constructor(private readonly props: CompanyProps) {
    this.validateCnpj(props.cnpj);
  }

  public static create(
    cnpj: string,
    registeredName: string,
    tradeName: string
  ) {
    return new Company({
      id: crypto.randomUUID().toString(),
      cnpj,
      registeredName,
      tradeName,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  public whit(props: CompanyProps) {
    return new Company(props);
  }

  public get id() {
    return this.props.id;
  }

  public get cnpj() {
    return this.props.cnpj;
  }

  public get registeredName() {
    return this.props.registeredName;
  }

  public get tradeName() {
    return this.props.tradeName;
  }

  public get status() {
    return this.props.status;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public enable() {
    this.props.status = true;
  }

  public disable() {
    this.props.status = false;
  }

  private validateCnpj(cnpj: string) {
    if (cnpj.length !== 14) {
      throw new Error("Invalid CNPJ: must contain exactly 14 digits");
    }
  }
}
