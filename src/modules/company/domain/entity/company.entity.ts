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
  private readonly props: CompanyProps;

  constructor(props: CompanyProps) {
    this.props = props;
  }

  get id(): string {
    return this.props.id;
  }

  get cnpj(): string {
    return this.props.cnpj;
  }

  get registeredName(): string {
    return this.props.registeredName;
  }

  get tradeName(): string {
    return this.props.tradeName;
  }

  get status(): boolean {
    return this.props.status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public static create(props: CompanyProps): Company {
    return new Company(props);
  }

  public update(cnpj: string, registeredName: string, tradeName: string): void {
    this.props.cnpj = cnpj;
    this.props.registeredName = registeredName;
    this.props.tradeName = tradeName;
    this.props.updatedAt = new Date();
  }

  public delete = (): void => {
    this.props.status = false;
    this.props.updatedAt = new Date();
  };

  public isActive = (): boolean => {
    return this.props.status;
  };

  toJson = (): CompanyProps => {
    return {
      id: this.props.id,
      cnpj: this.props.cnpj,
      registeredName: this.props.registeredName,
      tradeName: this.props.tradeName,
      status: this.props.status,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  };
}
