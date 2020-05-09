# VUEX用法

> 全局单一状态树state

## state 定义状态

``` bash

const state = {
  loginSuccess:null,//记录是否登录成功
};

```
# mutations更改状态
``` bash
import {
  SET_LOGIN_SUCCESS
} from './mutation-types.js'

export default {
  [SET_LOGIN_SUCCESS](state,isLogin){
    state.loginSuccess = isLogin;
  }
}
```
# 在组件中运用
``` bash
1、import {mapState,mapMutations} from 'vuex'  //引入
2、在computed里面声明，这个时候就可以用this.loginSuccess 访问全局变量了。对应state.js文件
   computed:{                                  
     ...mapState(['loginSuccess'])
   },
3、在methods里面声明修改的方法、对应mutations.js文件里面。        
   methods:{
      ...mapMutations(['SET_LOGIN_SUCCESS']),
   }
4、在业务代码里面调用。
   this.SET_LOGIN_SUCCESS(true);
```
完成上面4部就可以调用了。另外还可以用this.$store.commit("方法名",params);
