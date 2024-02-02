import { type SessionRepository } from '../../domain/persistence/SessionRepository';
import { Session } from '../../domain/Session';
import { AbstractPrismaRepository } from '../../../shared/infrastructure/persistence/AbstractPrismaRepository';

export class PrismaSessionRepository extends AbstractPrismaRepository implements SessionRepository {
  async findByShopId (shopId: string): Promise<Session | undefined> {
    const client = await this.client();
    const session = await client?.session.findUnique(
      {
        where: {
          id: shopId
        }
      }
    );

    if (undefined === session || session === null) {
      return undefined;
    }
    const { state, onlineAccessInfo, isOnline, accessToken, scope, id, expires, shop } = session;
    return new Session(
      id,
      shop,
      state,
      isOnline,
      expires ?? undefined,
      scope,
      accessToken ?? undefined,
      onlineAccessInfo ?? undefined
    );
  }

  async findByShop (shopName: string): Promise<Session[] | undefined> {
    const client = await this.client();
    const sessions = await client?.session.findMany(
      {
        where: {
          shop: shopName
        }
      }
    );
    return sessions?.map((session) => {
      const { state, onlineAccessInfo, isOnline, accessToken, scope, id, expires, shop } = session;
      return new Session(
        id,
        shop,
        state,
        isOnline,
        expires ?? undefined,
        scope,
        accessToken ?? undefined,
        onlineAccessInfo ?? undefined
      );
    });
  }

  async save (session: Session): Promise<void> {
    const client = await this.client();
    console.log(session);
    await client?.session.create(
      {
        data: {
          id: session.id,
          shop: session.shop,
          state: session.state,
          isOnline: session.isOnline,
          expires: session.expires ?? null,
          scope: session.scope ?? '',
          accessToken: session.accessToken ?? '',
          onlineAccessInfo: session.onlineAccessInfo ?? ''
        }
      }
    );
  }

  async delete (id: string): Promise<void> {
    const client = await this.client();
    await client?.session.delete(
      {
        where: {
          id
        }
      }
    );
  }
}
