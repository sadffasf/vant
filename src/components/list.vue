<template>
  <div>
    <van-tabs v-model="active" animated>
      <van-tab v-for="item,index in list" :title="'选项 ' + index"  :key="index" >
          <div class="box">
            <div class="item item-left">
              <van-image
                round
                width="160"
                height="160"
                :src="item.imgSrc"
              />
            </div>
            <div class="item item-right">
              <h5>{{item.title}}</h5>
              <div>{{item.date}}</div>
              <div style="font-weight: bold">{{item.author_name}}</div>
            </div>
          </div>
      </van-tab>
    </van-tabs>
    <van-button round block  @click="getList" color="linear-gradient(to right, #4bb0ff, #6149f6)">获取列表</van-button>
  </div>

</template>

<script>
    export default {
        name: "list",
        data(){
            return {
                active:0,
                list:[]
            }
        },
        methods:{
            getList(){
              this.$apis.getList().then(res=>{
                  console.log(res);
                  this.list = res.data
              })
            }
        }
    }
</script>

<style scoped>
  .box{
    display: flex;
  }
  .box .item-left{
    width: 200px;
    height: 160px;
  }
  .box .item-right{
    flex: 1;
  }
</style>
