<template>
  <div class="content">
    <div class="wrap">
      <Search />
      <n-tabs
        type="line"
        animated
        class="panle-tabs"
        trigger="hover"
        justify-content="space-evenly"
      >
        <n-tab-pane
          v-for="(item, index) in iconsData"
          :key="index"
          :name="item.name"
          :tab="item.name"
        >
          <div class="pane-wrap">
            <a v-for="(it, i) in item.list" :key="i" :href="it.url" target="_blank" class="item">
              <div class="img"><img :src="it.logo" /></div>
              <div class="text">{{ it.name }}</div>
            </a>
          </div>
        </n-tab-pane>
        <!-- <n-tab-pane tab="游戏"> Hey Jude </n-tab-pane>
        <n-tab-pane tab="购物"> 七里香 </n-tab-pane> -->
      </n-tabs>
    </div>
  </div>
</template>
<script setup>
  import { NTabs, NTabPane } from 'naive-ui'
  import { getLogoData } from '@/utils/index'

  const iconsData = getLogoData()
  /* ✓ GOOD */
</script>
<style lang="less" scoped>
  @import '@/assets/css/index.less';
</style>
