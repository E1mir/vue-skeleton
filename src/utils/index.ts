import qs from 'qs'

/**
 * Helper to generate url with query params
 * @param {string} url - url address
 * @param {string} query - query params
 * @returns {string} - url with query params
 */
export const queryToUrl = (url: string, query: string): string => {
  url = url + '?' + qs.stringify(qs.parse(query), { arrayFormat: 'brackets' })
  return url
}
