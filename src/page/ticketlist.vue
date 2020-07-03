<template>
  <div>

    <van-tabs   @click="onTabClick" sticky v-model="active" swipe-threshold="5" title-active-color="rgb(70, 120, 190)" lazy-render   color="rgb(70, 120, 190)" swipeable animated>
      <van-tab v-for="item,index in titles" :title="item" :key="item">
        <template v-for="ticket in ticketList" >
          <order-item :ticket="ticket"></order-item>
        </template>

        <div style="height: 52px;"></div>
      </van-tab>
    </van-tabs>
    <van-empty v-if="ticketList.length==0"  image="search"  description="" />
    <div class="loading"  v-if="loading" >
      <van-loading size="24px"  >加载中...</van-loading>
    </div>
    <div  style="position: fixed;height: 52px;width: 100%;left: 0;bottom: 0px;padding: 5px;box-sizing: border-box;background: #ffffff">
      <van-button icon="https://img.yzcdn.cn/vant/logo.png"  type="default" block>新建工单</van-button>
    </div>
  </div>
</template>

<script>
  import OrderItem from "@/components/OrderItem";
    export default {
        name: "ticketlist",
        components:{
            OrderItem,
        },
        data(){
            return {
                loading:false,
                titles:['所有','草稿','处理中','已解决','已关闭'],
                active:0,
                ticketList:[],
            }
        },
        methods:{
            onTabClick(name, title){
                let status = name == 0 ? '' : name ;
                this.searchTicketList(status)
            },
            searchTicketList(status=''){
                this.loading = true;
                let params = {
                    createTimeEnd:'',
                    createTimeStart:'',
                    isValid:'1',
                    pageIndex:1,
                    pageSize:10,
                    status:status
                }
                this.ticketList=[];
                this.$apis.searchTicket(params).then(res=>{
                    this.ticketList = res.data.list;
                    this.loading = false;
                }).catch(err=>this.loading = false);
            }
        },
        created() {
            this.searchTicketList('')
        }
    }
</script>

<style scoped>
.loading{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%)translateY(-50%);
}
</style>
