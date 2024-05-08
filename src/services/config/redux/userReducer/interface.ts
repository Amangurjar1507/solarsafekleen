  export interface ReducerState {
    userData: loginPayload;
    isLogin: boolean;
    token: string | undefined;
  }
  export interface loginPayload {
    _id: string;
    email: string;
  }
