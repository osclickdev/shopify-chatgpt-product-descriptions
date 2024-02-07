export interface AIRepository {
  completion: (prompt: string, value: string) => Promise<string | null>
}
