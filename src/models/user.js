import { queryUser } from '../services/user';

export default {
  namespace: 'user',
  state: {
    list: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      console.log('in fetch');
      const response = yield call(queryUser);
      console.log(response);
      yield put({
        type: 'save',
        payload: response.body,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
};
