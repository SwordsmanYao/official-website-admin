import request from '../utils/request';
import config from '../utils/config';

const { api } = config;
const { user } = api;

export async function queryUser() {
  return request(user);
}
