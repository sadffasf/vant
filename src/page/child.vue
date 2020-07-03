<template>
    <div>
      {{name}}
      <p>{{id}}</p>
    </div>
</template>

<script>
    export default {
        name: "child",
        props:['id'],
        data(){
            return {
                name:'子组件id:'
            }
        },
        watch:{
            id:{
                handler:(val,oldVal)=>{
                    console.log(val)
                },
                immediate:true,
            }
        }
    }
</script>

<style scoped>

</style>
