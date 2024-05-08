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
        token: action.payload?.data?.token,
        userData: action.payload?.data,
        isLogin: true,
      };
    },
    // editProfile: (state, action) => {
    //   return {
    //     ...state,
    //     userData: action.payload,
    //   };
    // },
    // logoutSuccess: (state, action) => {
    //   return {
    //     userData: {},
    //     isLogin: false,
    //     token: undefined,
    //     socketData: undefined,
    //   };
    // },
  },
});

export const {loginSuccess} =
  UserData.actions;
export default UserData.reducer;
