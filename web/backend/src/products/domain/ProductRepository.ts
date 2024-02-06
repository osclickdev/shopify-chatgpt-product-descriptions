export interface ProductRepository {
  count: () => number
  updateDescription: (productId: string, description: string) => void
  findName: (productId: string) => Promise<string>
}
