import { PrismaClient } from './client/PrismaClient';
import { type PrismaClient as CorePrismaClient } from '@prisma/client';

export abstract class AbstractPrismaRepository {
  protected async client (): Promise<CorePrismaClient | undefined> {
    return new PrismaClient().client;
  }
}
