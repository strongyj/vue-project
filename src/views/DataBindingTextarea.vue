<template>
  <div>
    <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '여러 줄을 입력할 수 있는 textarea 입니다.',
      };
    }
  }
</script>

<style lang="scss" scoped>

</style>