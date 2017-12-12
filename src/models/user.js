import { queryUser, addUser } from '../services/user';

export default {
  namespace: 'user',
  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      console.log('in fetch');
      const response = yield call(queryUser);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
    *saveUser({ payload }, { put }) {
      const user = {};
      Object.keys(payload).forEach((v) => {
        user[v] = payload[v].value;
      });
      yield put({
        type: 'saveCurrentUser',
        payload: user,
      });
    },
    *commitUser(_, { call, select }) {
      const currentUser = yield select(state => state.user.currentUser);
      console.log('currentUser', currentUser);
      const response = yield call(addUser, currentUser);
      console.log(response);
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
      };
    },
  },
};
