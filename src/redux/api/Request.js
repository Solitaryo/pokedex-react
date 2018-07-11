import fetch from 'node-fetch';
import * as ApiConstants from '../../constants/ApiConstants';

class Request {
  connection(
    method,
    url,
    data,
    headers
  ) {
    const customHeaders = headers || { 'Accept': 'application/json', 'content-type': 'application/json', 'Connection': 'keep-alive' }
    return fetch(`${ApiConstants.BASE_URL}${url}`, {
      method: method,
      headers: customHeaders,
      body: method !== 'GET' ? JSON.stringify({ 'query': data, 'variables': null }) : null
    })
  }
}

export default new Request();
