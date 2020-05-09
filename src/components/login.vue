<template>
  <div class="login">
    <h1 style="text-align: center">请输入域账号密码</h1>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
<!--        <van-button round block type="info" native-type="submit">-->
<!--          -->
<!--        </van-button>-->
        <van-button round block native-type="submit" color="linear-gradient(to right, #4bb0ff, #6149f6)"
        >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "login",
        data(){
            return{
                username: '',
                password: '',
            }
        },
        computed:{
          ...mapState(['loginSuccess'])
        },
        methods:{
            ...mapMutations(['SET_LOGIN_SUCCESS']),
            onSubmit(values) {
                if(values.username&&values.password){
                    let redirect = this.$route.query.redirect;
                    localStorage.setItem('hasLogin',1);
                    this.SET_LOGIN_SUCCESS(1);
                    //获取token存起来
                    if(redirect){
                        window.location.href = redirect
                    }else{
                        this.$router.push('/detail/12')
                    }
                }
            },
        }
    }
</script>

<style scoped>

</style>
