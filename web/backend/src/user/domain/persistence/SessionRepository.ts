import { type Session } from '../Session';

export interface SessionRepository {
  findByShopId: (shopId: string) => Promise<Session | undefined>
  findByShop: (shopName: string) => Promise<Session[] | undefined>
  save: (session: Session) => Promise<void>
  delete: (id: string) => Promise<void>
}
