// A simplifier to make requests to the backend
// and include the token in the headers
// so that the backend can authenticate the user

function request({
  url, ...options
}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: localStorage.getItem('token')
    }
  });
}

request.get = (url) => {
  return request({ url, method: 'GET' });
}

request.post = (url, body, jsonFormat=false) => {
  if (!jsonFormat) return request({ url, method: 'POST', body });
  return request({ url, method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' }});
}

request.put = (url, body) => {
  return request({ url, method: 'PUT', body });
}

export default request;