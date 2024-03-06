import type { Cache } from '.'

/**
 * A cache control for base metadata response
 * It's lay on root layout
 *
 * @constant
 */
export const CONTENTS: Cache = {
  CACHE_TAGS: ['home:contents'],
  CACHE_PATH: '/',
  CACHE_KEY: 'contents',
  TTL: 3600 * 10,
}
