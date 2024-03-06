import type { Cache } from '.'

/**
 * A cache control for about me response
 *
 * @constant
 */
export const ABOUT_ME: Cache = {
  CACHE_TAGS: ['home:aboutMe'],
  CACHE_PATH: '/',
  CACHE_KEY: 'aboutMe',
  TTL: 3600,
}

/**
 * A cache control for about me response
 *
 * @constant
 */
export const SPEAKS_HIGHLIGHTED: Cache = {
  CACHE_TAGS: ['home:speaksHighlighted'],
  CACHE_PATH: '/',
  CACHE_KEY: 'speaksHighlighted',
  TTL: 3600,
}
