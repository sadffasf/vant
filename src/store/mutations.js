import {
  SET_LOGIN_SUCCESS
} from './mutation-types.js'

export default {
  [SET_LOGIN_SUCCESS](state,isLogin){
    state.loginSuccess = isLogin;
  }
}
