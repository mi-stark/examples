<template>
  <div>
    <div class="title">this is a NUXT demo</div>
    <el-button @click="handleClick">测试点击</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return {

    }
  },
  methods: {
    handleClick(e){
      console.log(e)
    }
  },
  created() {
    console.log('created')
  }
}
</script>

<style scoped>
.title{
  color: blueviolet;
}
</style>
