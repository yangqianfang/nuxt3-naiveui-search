<template>
  <div class="content">
    <Search />
    <!-- <NuxtLink to="/user" class="red">user page</NuxtLink>
    <div class="title">这里是标题2</div>
    index page {{ count }} -->
  </div>
</template>
<script setup>
  /* ✓ GOOD */
  const count = ref(0)
  const increment = () => count.value++
</script>
<style lang="less" scoped>
  @import '@/assets/css/index.less';
</style>
