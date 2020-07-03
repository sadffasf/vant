<template>
<div>
<!--  所属客户组件 -->
  <belong-customer   @selected="belongCustomerSelected" :show.sync="showPicker.belongCustomer"></belong-customer>

<!--  所属系统组件 -->
  <customer-system   :show.sync="showPicker.customerSystem"></customer-system>

<!--  工单只读 -->
    <div>
      <order-item :ticket="data" readonly ></order-item>
    </div>
  <!--  发起人 -->
    <div>
      <van-cell-group title="发起人">
        <van-field
          @click="showPicker.belongCustomer = true"
          is-link
          required
          readonly
          v-model="ruleForm.custom"
          label="所属客户"
          placeholder="请选择所属客户"
          input-align="right"
        />
        <van-field
          @click="chooseCustomer"
          is-link
          required
          readonly
          v-model="ruleForm.custom"
          label="城市公司"
          placeholder="请选择城市公司"
          input-align="right"
        />
        <van-field
          @click="chooseCustomer"
          is-link
          required
          readonly
          v-model="ruleForm.custom"
          label="姓名"
          placeholder="请选择姓名"
          input-align="right"
        />
        <van-field
          readonly
          v-model="ruleForm.custom"
          label="手机号"
          placeholder="无"
          input-align="right"
        />
        <van-button  @click="moreInfo=!moreInfo" v-if="!moreInfo"  type="primary" color="#fff" class="more-info" block> <span>更多信息</span><span><van-icon name="arrow-down" /></span></van-button>
        <template v-if="moreInfo">
          <van-field
            readonly
            v-model="ruleForm.custom"
            label="座机"
            placeholder="无"
            input-align="right"
          />
          <van-field
            @click="showPicker.sex=true"
            readonly
            v-model="ruleForm.sex"
            label="性别"
            placeholder=""
            input-align="right"
          />
          <van-popup v-model="showPicker.sex" position="bottom">
            <van-picker
              show-toolbar
              :columns="['男','女']"
              @confirm="chooseSexConfirm"
              @cancel="showPicker.sex = false"
            />
          </van-popup>
          <van-field
            readonly
            v-model="ruleForm.custom"
            label="微信"
            placeholder="无"
            input-align="right"
          />
          <van-field
            readonly
            v-model="ruleForm.custom"
            label="邮箱"
            placeholder="无"
            input-align="right"
          />
        </template>

      </van-cell-group>

      <van-cell-group title="事件">
        <van-field
          @click="showPicker.customerSystem = true"
          is-link
          required
          readonly
          v-model="ruleForm.customerSystem"
          label="所属系统"
          placeholder="请选择所属系统"
          input-align="right"
        />
      </van-cell-group>
    </div>
</div>
</template>

<script>
  import OrderItem from "@/components/OrderItem";
  import belongCustomer from "@/components/belongCustomer";
  import CustomerSystem from "../components/CustomerSystem";
    export default {
        name: "order",
        data(){
          return {
              data:{},
              showPicker:{
                sex:false,
                belongCustomer:false,
                customerSystem :false,
              },
              ruleForm: {
                  custom:'',//所属客户
                  customerSystem:'',//所属系统
              },
              moreInfo:false,

          }
        },
        components:{
            OrderItem,
            belongCustomer,
            CustomerSystem
        },
        methods:{
            chooseSexConfirm(val){
                this.ruleForm.sex = val;
                this.showPicker.sex = false;
            },
            chooseCustomer(data){
                console.log(data);
                this.showPicker.belongCustomer = true;

            },
            belongCustomerSelected(data){
                this.ruleForm.custom = data.customerName
            },
            //获取工单详情
            getTicketDetail(){
                let params ={
                    id:this.id,
                }
                this.$apis.getTicketDetail(params).then(res=>{
                    this.data = res.data;
                })
            }
        },
        computed:{
            id(){
                return this.$route.params.id
            }
        },
        created() {
            this.getTicketDetail();
        },

    }
</script>

<style lang="scss" scoped>
.more-info{
  display: flex;
  align-items: center;
  span{
    color: #108ee9;
    text-align: center;
  }
}
</style>
