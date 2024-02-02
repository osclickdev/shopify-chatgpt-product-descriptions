import { PrismaClient as CorePrismaClient } from '@prisma/client';

export class PrismaClient {
  constructor (public readonly client?: CorePrismaClient) {
    this.client = new CorePrismaClient();
  }
}
