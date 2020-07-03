<template>
  <div>
    <button @click="changeIds">改变子组件的值</button>
    <child :id="id"></child>
  </div>
</template>

<script>
    import child from "./child";
    export default {
        name: "test",
        components:{
            child
        },
        data(){
            return {
                id:[],
            }
        },
        methods:{
           changeIds(){
               this.id.push(Math.random())
           }
        }
    }
</script>

<style scoped>

</style>
