import fetch from 'node-fetch';
import * as ApiConstants from '../../constants/ApiConstants';

class Request {
  connection(
    method,
    url,
    data,
    headers
  ) {
    const customHeaders = headers ||
      {
        'Accept': 'application/json',
        'content-type': 'application/json',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
      }
    return fetch(`${ApiConstants.BASE_URL}${url}/`, {
      method: 'GET',
      headers: customHeaders
    })
  }
}

export default new Request();
