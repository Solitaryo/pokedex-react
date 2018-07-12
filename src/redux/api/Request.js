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
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    return fetch(`${ApiConstants.BASE_URL}${url}/`, {
      method: method,
      headers: customHeaders
    })
  }
}

export default new Request();
