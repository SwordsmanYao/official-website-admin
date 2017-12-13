import request from '../utils/request';
import config from '../utils/config';

const { api } = config;

export async function queryUser() {
  return request(`${api}/user`);
}

export async function addUser(params) {
  return request(`${api}/user`, {
    method: 'POST',
    data: params,
  });
}
