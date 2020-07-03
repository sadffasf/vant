<template>
  <div class="login">
    <div class="center title">域账号登录</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入企业邮箱"
        :rules="[{ required: true, message: '请输入企业邮箱' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" :loading="loading" loading-text="登录中..." native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
<!--    <div v-if="loading||true" class="fixed-center">-->
<!--      <van-loading size="24px">加载中...</van-loading>-->
<!--    </div>-->
  </div>

</template>

<script>
    import {  encode64,setStore } from "@/config/mUtils";
    import { SHA1 } from "@/config/sha";
    export default {
        name: "login",
        data(){
            return {
                username:'',
                password:'',
                loading:false,
            }
        },
        methods:{
            onSubmit(){
                let params = {
                    email: this.username,
                    pwd: SHA1(this.password),
                    password: encode64(this.password),
                    code: 'mynbkh'
                };
                this.loading = true ;
                this.$apis.login(params).then(res=>{
                    this.loading = false ;
                    setStore("agentId", res.data.agentId);
                    setStore("name", res.data.name);
                    setStore(
                        "avatar",
                        res.data.avatar
                            ? res.data.avatar
                            : "//myom-dev.oss-cn-hangzhou.aliyuncs.com/bigscreen/images/default.png"
                    );
                    setStore("userRole", res.data.userRole); //坐席角色
                    this.$router.replace({
                        path: '/ticketlist'
                    });
                }).catch(err=>{
                    this.loading = false ;
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
  .login{
    padding: 10%;
    .center{
      text-align: center;
    }
    .title{
      font-weight: bold;
      font-size: 1.6em;
      margin-bottom: 20px;
    }
    .fixed-center{
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translateY(-50%)translateX(-50%);
    }
  }

</style>
