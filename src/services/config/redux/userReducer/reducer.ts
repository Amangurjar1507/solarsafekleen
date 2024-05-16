import {createSlice} from '@reduxjs/toolkit';
import {ReducerState} from './interface';

const UserData = createSlice({
  name: 'users',
  initialState: {
    userData: {},
    isLogin: false,
    token: undefined,
  } as ReducerState,

  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        token: action.payload?.data?.user?.token,
        userData: action.payload?.data?.user?.existingUser,
        isLogin: true,
      };
    },
    editProfile: (state, action) => {
      return {
        ...state,
        userData: action.payload,
      };
    },
    logoutSuccess: (state, action) => {
      return {
        userData: {},
        isLogin: false,
        token: undefined,
      };
    },
  },
});

export const {loginSuccess, logoutSuccess,editProfile} = UserData.actions;
export default UserData.reducer;
