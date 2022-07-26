<template>
  <div class="tab-box">
    <n-tabs type="line" animated class="panle-tabs" trigger="hover" justify-content="space-evenly">
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
    </n-tabs>
  </div>
</template>
<script lang="ts" setup>
  import { NTabs, NTabPane } from 'naive-ui'
  import { getLogoData } from '@/utils/index'
  const iconsData = getLogoData()
</script>
<style lang="less" scoped>
  @item-width: 70px;
  @icon-width: 24px;
  .tab-box {
    .panle-tabs {
      padding-top: 40px;
    }
    :deep(.n-tabs) {
      .n-tabs-tab {
        color: #fff;
        font-weight: bold;
      }
      .n-tabs-bar {
        background-color: #3d63fe;
      }
      .n-tabs-nav-scroll-content {
        border: 0 !important;
      }
    }
    .pane-wrap {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: @item-width;
        height: @item-width;
        background: rgba(255, 255, 255, 0.7);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border-radius: 6px;
        margin: 10px;
        transition: 0.25s;

        &:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateY(-3px);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        }
        .img {
          width: @icon-width;
          height: @icon-width;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: @icon-width;
            height: @icon-width;
            border-radius: 4px;
          }
        }
        .text {
          font-size: 12px;
          padding-top: 5px;
          text-align: center;
          color: #333;
          font-weight: bold;
        }
      }
    }
  }
</style>
