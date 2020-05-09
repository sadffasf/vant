/*
* 组件内用法：
* import '@/mixin'; // 引入mixin文件
  export default {
    mixins: [mixin]
  }
*
* */
export default {
  data() {
    return {
      name: 'mixinName',
    }
  },
  created() {

  },
  mounted() {
    console.log('mixin...', this.name);
  },
  methods: {}
}
