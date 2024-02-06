import { Session } from '@shopify/shopify-api';
import { type SessionStorage } from '@shopify/shopify-app-session-storage';
import { type SessionRepository } from '../../domain/persistence/SessionRepository';
import { Session as DomainSession } from '../../domain/Session';

export class PrismaSessionStorage implements SessionStorage {
  #currentSession: DomainSession | undefined = undefined;

  constructor (
    private readonly sessionRepository: SessionRepository
  ) {
  }

  async currentSession (): Promise<Session | undefined> {
    if (undefined === this.#currentSession) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Session.fromPropertyArray(Object.entries(this.#currentSession));
  }

  async storeSession (session: Session): Promise<boolean> {
    const userSession = new DomainSession(
      session.id,
      session.shop,
      session.state,
      session.isOnline,
      session.expires ?? undefined,
      session.scope,
      session.accessToken ?? '',
      JSON.stringify(session.onlineAccessInfo)
    );
    try {
      await this.sessionRepository.save(userSession);
    } catch (e) {
      return false;
    }
    return true;
  }

  async loadSession (id: string): Promise<Session | undefined> {
    if (undefined === this.#currentSession) {
      this.#currentSession = await this.sessionRepository.findByShopId(id);
      if (undefined === this.#currentSession) {
        return undefined;
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Session.fromPropertyArray(Object.entries(this.#currentSession));
  }

  async deleteSession (id: string): Promise<boolean> {
    await this.sessionRepository.delete(id);
    return true;
  }

  async deleteSessions (ids: string[]): Promise<boolean> {
    for (const id of ids) {
      await this.sessionRepository.delete(id);
    }
    return true;
  }

  async findSessionsByShop (shop: string): Promise<Session[]> {
    const sessions = await this.sessionRepository.findByShop(shop) ?? [];
    return sessions.map((session) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return Session.fromPropertyArray(Object.entries(session));
    });
  }
}
