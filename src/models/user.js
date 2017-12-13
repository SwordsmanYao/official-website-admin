import { queryUser, addUser } from '../services/user';

export default {
  namespace: 'user',
  state: {
    list: [],
    currentUser: {},
  },

  effects: {

    *fetch(_, { call, put }) {
      const response = yield call(queryUser);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    // 页面的改变保存到 model 的 state 中
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
    // 提交新用户
    *commitUser(_, { call, select, put }) {
      const currentUser = yield select(state => state.user.currentUser);
      const response = yield call(addUser, currentUser);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
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
