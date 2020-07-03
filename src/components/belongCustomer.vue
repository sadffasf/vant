<template>
    <van-popup  @open="open()" @close="close()"  v-model="show" position="bottom" :style="{ height: '100%'}" >
      <div class="box">
        <div class="top">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入所属客户关键字"
            @search="onSearch"
            @cancel="onCancel"
            @input="onSearch"
          />
        </div>
        <div class="content">
          <van-empty v-if="data.length==0"  image="search"  description="神马都没有" />
          <van-cell-group v-if="data.length>0">
            <van-cell clickable  @click="selected(item)" v-for="item in data" :key="item.id"  :title="item.customerName" value=""  />
          </van-cell-group>
        </div>
      </div>

    </van-popup>

</template>

<script>
    export default {
        props:{
            destext:{//左侧搜索文字
                type:String,
                default:'',
            },
            show:{
                type: Boolean,
                default: true,
            }
        },
        data(){
            return{
                value:'',
                data:[],
                isShow:true,
            }
        },
        methods:{
            open(){
                this.onSearch();
            },
            close(){
                this.value='';
                this.data=[];
                this.$emit('update:show',false);
            },
            onSearch(){
                let params = {
                    name:this.value,
                }
                this.$apis.searchCustomer(params).then(res=>{
                    this.data = res.data.list ;
                });
            },
            onCancel(){
                this.$emit('update:show',false);
            },
            selected(item){
                this.$emit('update:show',false);
                this.$emit("selected",item);
            }
        },
    }
</script>

<style lang="scss" scoped>
.box{
  height: 100%;
  display: flex;
  flex-direction: column;
  .top{
    width: 100%;
  }
  .content{
    flex: 1;
    overflow-y: auto;
  }
}
</style>
