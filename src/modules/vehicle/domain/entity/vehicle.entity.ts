export interface VehicleProps {
  id: string;
  companyId: string;
  identification: string;
  type: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class Vehicle {
  private constructor(private readonly props: VehicleProps) {}

  public static create(
    companyId: string,
    identification: string,
    type: number
  ) {
    return new Vehicle({
      id: crypto.randomUUID().toString(),
      companyId,
      identification,
      type,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  public whit(props: VehicleProps) {
    return new Vehicle(props);
  }

  public get id() {
    return this.props.id;
  }

  public get companyId() {
    return this.props.companyId;
  }

  public get identifier() {
    return this.props.identification;
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
}
