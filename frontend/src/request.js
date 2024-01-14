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

request.post = (url, body) => {
  return request({ url, method: 'POST', body });
}

export default request;