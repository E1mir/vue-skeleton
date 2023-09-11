import Cookies from 'js-cookie'

import { HttpResponse } from '@/types/core/HttpResponse.ts'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
async function sendRequest(method: string, path: string, data?: any, config?: RequestInit): Promise<HttpResponse> {
  const token = Cookies.get('access_token')

  const headers = {
    Accept: 'application/json'
    // Here add more headers if needed
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const url = `${BASE_URL}${path}`
  const requestInit: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
    ...config
  }

  return fetch(url, requestInit).then(async (response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const body = await response.json()

    const httpResponse: HttpResponse = {
      response,
      data: body
    }
    return httpResponse
  })
}

const http = {
  get: (path: string, config?: RequestInit) => sendRequest('GET', path, undefined, config),
  post: (path: string, data: any, config?: RequestInit) => sendRequest('POST', path, data, config),
  put: (path: string, data: any, config?: RequestInit) => sendRequest('PUT', path, data, config),
  patch: (path: string, data: any, config?: RequestInit) => sendRequest('PATCH', path, data, config),
  delete: (path: string, config?: RequestInit) => sendRequest('DELETE', path, undefined, config)
}

export { http, sendRequest }
