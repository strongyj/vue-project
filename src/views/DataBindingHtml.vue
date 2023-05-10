<template>
  <div>
    <h1>{{ htmlString }}</h1>
    <h1 v-html="htmlString"></h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        htmlString: '<p style="color:red;">This is a red string.</p>',
      };
    }
  }
</script>

<style lang="scss" scoped>

</style>