export interface ProductRepository {
  count: () => number
  updateDescription: (productId: string, description: string) => void
}
