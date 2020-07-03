<template>
     <van-popup  @open="open()" @close="close()"  v-model="show" position="bottom" :style="{height:'100%'}" >
       <div class="box">
         <div class="top">
           <van-search
             v-model="value"
             show-action
             placeholder="请输入所属系统关键字"
             @search="onSearch"
             @cancel="onCancel"
             @input="onSearch"
           />
         </div>
         <div class="content">
<!--           <van-empty v-if="data.length==0"  image="search"  description="神马都没有" />-->
           <van-picker  :loading="loading" show-toolbar   title="所属系统" :columns="columnsData" />
         </div>
       </div>
     </van-popup>
</template>

<script>
    const nest = (items, id = null, link = 'parent_id') =>items.filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.id) }));

  export default {
        name: "CustomerSystem",
        props:{
            show:{
                type: Boolean,
                default: true,
            }
        },
        data(){
            return{
                columns:[],
                loading:false,
                showPicker:true,
                value:'',
                columnsData: [
                    {
                        text: '浙江',
                        children: [
                            {
                                text: '杭州',
                                children: [{ text: '西湖区' }, { text: '余杭区' }],
                            },
                            {
                                text: '温州',
                                children: [{ text: '鹿城区' }, { text: '瓯海区' }],
                            },
                        ],
                    },
                    {
                        text: '福建',
                        children: [
                            // {
                            //     text: '福州',
                            //     children: [{ text: '鼓楼区' }, { text: '台江区' }],
                            // },
                            // {
                            //     text: '厦门',
                            //     children: [{ text: '思明区' }, { text: '海沧区' }],
                            // },
                            {
                                text:'',
                                children:[],
                            }
                        ],
                    },
                ],
            }
        },
        methods:{
            open(){
                this.onSearch();
            },
            close(){
                this.value='';
                this.$emit('update:show',false);
            },
            onSearch(){
                this.getCustomerSystem();
            },
            onCancel(){
                this.$emit('update:show',false);
            },
            getCustomerSystem(customerId=1){
                this.loading= true;
                let params = {
                    customerId:customerId,
                }
                this.$apis.getCustomerSystem(params).then(res=>{
                    this.loading= false;
                    let data = res.data.list ;
                    this.columns = nest(data,0,'pid');
                    console.log(this.columns);
                }).catch(err=>{
                    this.loading= false;
                })
            },
            arrayToTree(data, pid=0) {
                let tree = [];
                let temp;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].pid == pid) {
                        let obj = data[i];
                        temp =this.arrayToTree(data, data[i].id);
                        if (temp.length > 0) {
                            obj.children = temp;
                            console.log(obj)
                        }
                        tree.push(obj);
                    }
                }
                // console.log(tree)
                return tree;
            },
            convertToTreeData(data, pid) {
                const result = []
                let temp = []
                for (let i = 0; i < data.length; i++) {
                    if (data[i].pid === pid) {
                        const obj = data[i],
                        temp = this.convertToTreeData(data, data[i].id)
                        if (temp.length > 0) {
                            obj.children = temp
                        }
                        result.push(obj)
                    }
                }
                return result
            },

        },
        created() {
            window.vm= this;
            this.getCustomerSystem();
        }
    }
</script>

<style scoped>

</style>
