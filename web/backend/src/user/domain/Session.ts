import { AggregateRoot } from '../../shared/domain/AggregateRoot';

export class Session extends AggregateRoot {
  constructor (
    public readonly id: string,
    public readonly shop: string,
    public readonly state: string,
    public readonly isOnline: boolean,
    public readonly expires?: Date,
    public readonly scope?: string,
    public readonly accessToken?: string,
    public readonly onlineAccessInfo?: string
  ) {
    super();
  }
}
