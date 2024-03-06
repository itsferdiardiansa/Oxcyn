import type { Cache } from '.'
/**
 * A cache control for base metadata response
 * It's lay on root layout
 *
 * @constant
 */
export const BASE_METADATA: Cache = {
  CACHE_TAGS: ['home:baseMetadata'],
  CACHE_PATH: '/',
  CACHE_KEY: 'baseMetadata',
  TTL: 3600,
}
