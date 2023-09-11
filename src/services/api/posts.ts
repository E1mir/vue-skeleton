import { http } from '../http'
import { queryToUrl } from '@/utils'


// GET
export const getPosts = (query?: any, config?: RequestInit) => {
  let url = '/posts'
  if (query) url = queryToUrl(url, query)
  return http.get(url, config)
}
