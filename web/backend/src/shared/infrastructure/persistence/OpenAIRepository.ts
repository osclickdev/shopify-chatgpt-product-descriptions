import { type AIRepository } from '../../domain/persistence/AIRepository';
import { type OpenAIClient } from './client/OpenAIClient';

export class OpenAIRepository implements AIRepository {
  constructor (private readonly client: OpenAIClient) {
  }

  async completion (prompt: string, value: string): Promise<string | null> {
    const client = await this.client.getClient();
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      messages: [
        {
          role: 'system',
          content: prompt
        },
        {
          role: 'user',
          content: value
        }
      ]
    });
    return response.choices[0].message.content;
  }
}
