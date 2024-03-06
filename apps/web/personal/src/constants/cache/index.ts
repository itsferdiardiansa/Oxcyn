/**
 * A centralized cache control for any data response in apps/*
 * I write this to giving an easiness to maintain it.
 *
 */
export type Cache = {
  CACHE_TAGS: string[]
  CACHE_PATH: `/${string}`
  CACHE_KEY: string
  TTL: number
}
