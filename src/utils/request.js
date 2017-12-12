import axios from 'axios';

function fetch(url, options) {
  const { method, data } = options;
  switch (method.toUpperCase()) {
    case 'POST':
      return axios.post(url, data);
    case 'PUT':
      return axios.put(url, data);
    case 'PATCH':
      return axios.patch(url, data);
    case 'DELETE':
      return axios.delete(url, { data });
    case 'GET':
    default:
      return axios.get(url, {
        params: data,
      });
  }
}

export default function request(url, options = { method: 'GET' }) {
  return fetch(url, options)
  .then((response) => {
    if (response.status === 200) {
      return response.data;
    }
  });
}
