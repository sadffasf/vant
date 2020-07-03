<template>
  <div class="order"  @click="itemClick(ticket.id)">
<!--    头部-->
      <div class="title">
         <div class="left"><span>工单号:</span> <span>{{ticket.id}}</span></div>
         <div class="right"><span v-text="statusChange(ticket.status)"></span></div>
      </div>

      <van-divider />
 <!--    分割线-->
      <div class="ticket-title van-multi-ellipsis--l2">{{ticket.title}}</div>
<!--    信息-->
      <div class="msg">
         <div class="item">
           <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
           <span>发起人:{{ticket.customerName}} - {{ticket.visitorName}}</span>
           <span></span>
         </div>
        <div class="item">
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          <span>处理人:{{ticket.agentName}}</span>
          <span></span>
        </div>
        <div class="item">
          <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          <span>SLA:{{ticket.slaTime}}</span>
          <span v-if="ticket.tags"  >
            <span v-for="item in ticket.tags.split(',')" style="margin-left: 5px;">
              <van-tag plain  type="danger">{{item}}</van-tag>
            </span>

          </span>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "OrderItem",
        props:{
          ticket:{
              type:Object,
              default:{}
          },
          readonly:{
            type:Boolean,
            default:false,
          }
        },
        data(){
            return {

            }
        },
        methods:{
          statusChange(val){
              switch (val) {
                  case 1:
                      return "专属工程师处理中";
                  default:
                      return "默认"+val
              }
          },
          itemClick(){
              if(this.readonly)return;
              this.$router.push({
                  name:'order',
                  params:{id:this.ticket.id}
              })
          },
        },

    }
</script>

<style lang="scss" scoped>
  .order{
    border-radius: 4px;
    overflow: hidden;
    padding: 4px;
    box-sizing: border-box;
    border: solid 1px #ddd;
    margin: 5px;
    .title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px;
    }
  }
</style>
