import type { Cache } from '.'

/**
 * A cache control for base metadata response
 * It's lay on root layout
 *
 * @constant
 */
export const SOCIALS: Cache = {
  CACHE_TAGS: ['home:socials'],
  CACHE_PATH: '/',
  CACHE_KEY: 'socials',
  TTL: 3600,
}
