  export interface ReducerState {
    userData: any;
    isLogin: boolean;
    token: string | undefined;
  }
  export interface loginPayload {
    _id: string;
    email: string;
    mobileNumber:number,
    password:string
  }
