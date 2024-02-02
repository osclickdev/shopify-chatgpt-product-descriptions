export class DomainEvent {
  constructor (
    public readonly name: string,
    public readonly data: any,
    public readonly occurredOn: Date = new Date()
  ) {}
}
