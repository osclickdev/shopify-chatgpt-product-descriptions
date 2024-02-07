import OpenAI from 'openai';
export class OpenAIClient {
  private client: OpenAI | null = null;
  async getClient (): Promise<OpenAI> {
    if (this.client === null) {
      this.client = new OpenAI();
    }
    return this.client;
  }
}
