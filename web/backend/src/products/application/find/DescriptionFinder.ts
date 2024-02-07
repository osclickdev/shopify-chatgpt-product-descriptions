import { type AIRepository } from '../../../shared/domain/persistence/AIRepository';

export class DescriptionFinder {
  constructor (private readonly repository: AIRepository) {}

  async find (productName: string): Promise<string | null> {
    return await this.repository.completion(
      'Eres un redactor español experimentado, experto en crear descripción para productos, genera una descripción de producto concisa para un producto con nombre entre las etiquetas <productName></productName>. Debes usar únicamente información del nombre. Usa un tono imparcial y periodístico. No repitas texto.',
      `<ProductName>${productName}</ProductName>`
    );
  }
}
