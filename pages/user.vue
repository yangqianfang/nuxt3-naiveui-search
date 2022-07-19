<template>
  <div>
    <Header />
    <h1> userpage</h1>
  </div>
</template>
<script setup>
  const count = ref(0)
  const increment = () => count.value++
</script>
