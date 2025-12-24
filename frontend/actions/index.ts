import { registerUserAction, loginUserAction } from './auth';

export const actions = {
  auth: {
    registerUser: registerUserAction,
    loginUser: loginUserAction,
  },
};
