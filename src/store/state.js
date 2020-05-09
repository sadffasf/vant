/*
* 单一状态树
* */

const state = {
  token:localStorage.getItem("token"),//记录登录token
  loginSuccess:null,
};

export default state
