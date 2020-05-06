<template>
    <div class="detail">
      <div class="ticket-box">
        <van-panel icon="fire-o" :title="'工单ID:'+$route.params.id" desc="" status="专属工程师处理中">
          <div class="paddings">
            <div class="item-title"> <strong>这是标题</strong> </div>
            <div class="item"  >
              <van-icon name="fire-o" />
            </div>
            <div class="item"><van-icon name="fire-o" /></div>
            <div class="item"><van-icon name="fire-o" />
              SLA(P2): <span @click="tis">kjdkfkfdk</span>
            </div>
          </div>
        </van-panel>
      </div>
      <div class="ticket-sender paddings">
        <div><strong>发起人</strong></div>
        <div>
          <van-cell-group>
            <van-field
              v-model="ruleForm.belongCustomer"
              label="所属客户"
              required
              readonly
              placeholder="请选择所属客户"
              is-link
              @click="belongCustomerClick"
              input-align="right"
            />
            <van-field
              v-model="ruleForm.cityCompany"
              label="城市公司"
              required
              readonly
              placeholder="请选择城市公司"
              is-link
              @click="cityCompanyClick"
              input-align="right"
            />
          </van-cell-group>
        </div>
      </div>
<!--      所属系统选择弹框 -->
      <van-popup
        v-model="showPicker"
        round
        position="bottom"
      >
        <van-picker   show-toolbar   @cancel="showPicker=false" @confirm="belongCustomerConfirm"   title="请选择所属系统" :columns="columns" @change="belongCustomerChange"/>
      </van-popup>
<!--      城市公司选择弹框-->
      <van-popup
        v-model="showPicker"
        round
        position="bottom"
      >
        <van-picker   show-toolbar   @cancel="showPicker=false" @confirm="belongCustomerConfirm"   title="请选择所属系统" :columns="columns" @change="belongCustomerChange"/>
      </van-popup>

    </div>
</template>

<script>
  import jsonData from "./jsondata";
    export default {
        name: "detail",
        data(){
            console.log(jsonData);
            return{
                showPicker:false,
                columns:jsonData,
                ruleForm:{
                    belongCustomer:null,
                    cityCompany:null,
                }
            }
        },
        methods:{
            tis(){
                this.$notify({ type: 'primary', message: '这里是sla的解释内容',duration: 1000, });
            },
            //选择所属系统
            belongCustomerClick(){
                this.showPicker = true;
            },
            belongCustomerConfirm(data,index){
                console.log(data,index);
                this.ruleForm.belongCustomer = data.join("/");
                this.showPicker = false;
            },
            belongCustomerChange(_vm,data,index){

            },
            //选择城市公司
            cityCompanyClick(){},
        }
    }
</script>

<style  scoped>

  .paddings{
    padding: 10px 16px;
  }
  .ticket-box{
    border: 1px solid #ebedf0;
    border-radius: 8px;
    margin: 10px;
    overflow: hidden;
  }
 .item-title{
   margin-bottom: 20px;
 }
 .item{
   line-height: 32px;
 }


</style>
