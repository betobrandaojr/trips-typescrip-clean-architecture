export interface Usecase<InputDto, UsecaseOutputDto> {
  execute(input: InputDto): Promise<UsecaseOutputDto>;
}
