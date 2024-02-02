import { type DomainEvent } from './domainEvent';

export interface EventBus {
  publish: (events: DomainEvent[]) => void
}
