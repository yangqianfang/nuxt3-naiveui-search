<template>
  <div class="search-box">
    <!-- 搜索栏start -->
    <div class="content">
      <div class="select">
        <!-- <div class="view" @mouseenter="showSeachEngine(true)" @mouseleave="showSeachEngine(false)"
          >百度</div
        >
        <ul v-show="showEngin" class="ul" @mouseleave="showSeachEngine(false)">
          <li class="this_s">F 搜</li>
          <li class="miji_s">duck</li>
          <li class="bing_s">必 应</li>
          <li class="google_s">谷 歌</li>
          <li class="baidu_s">百 度</li>
          <li class="ff_s">F 搜</li>
        </ul> -->
        <NDropdown :options="options" placement="bottom-start" @select="handleSelect">
          <!-- <NButton class="dropButton">Dropdown</NButton> -->
          <div class="view">{{ platform.label }}</div>
        </NDropdown>
      </div>
      <div class="search">
        <NAutoComplete
          v-model:value="keyWord"
          clearable
          size="large"
          :input-props="{
            autocomplete: 'disabled'
          }"
          :options="searchList"
          placeholder="关键词"
          @select="onAutoCompleteSelect"
        />
      </div>
      <NButton class="buttton" color="#264ff8" type="info" @click="onSubmit">搜 索</NButton>

      <!-- 搜索栏end -->
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { NButton, NDropdown, NAutoComplete } from 'naive-ui'
  import fetchJsonp from 'fetch-jsonp'
  /* ✓ GOOD */
  const keyWord = ref('')
  const searchList = ref([])
  const options = [
    {
      label: '百度',
      key: '1',
      url: 'https://www.baidu.com/s?wd='
    },
    {
      label: '必应',
      url: 'https://cn.bing.com/search?q=',
      key: '3'
    },
    {
      label: 'F 搜',
      url: 'https://fsoufsou.com/search?q=',
      key: '4'
    }
  ]
  const platform = ref(options[0])

  // 监控关键词
  watch(keyWord, () => {
    getList()
  })

  /* 
  获取关键词列表 使用jsonp
  jsonp 必须封装到方法里，如果放到watch里面直接执行，由于是服务端渲染，会报找不到window对象的错误
  */
  async function getList() {
    try {
      const response = await fetchJsonp(
        `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + ${keyWord.value}`,
        {
          jsonpCallback: 'cb'
        }
      )
      const res = await response.json()
      const resList = res.s
      const N = []

      resList.forEach((element) => {
        N.push({
          label: element,
          value: element
        })
      })

      searchList.value = N
    } catch (error) {}
  }

  // const { data, refresh } = await useFetch('/api/user')
  // console.log(data, 666)

  // 搜索平台选择
  const handleSelect = (value, item) => {
    platform.value = item
  }

  // 选择关键词列表
  const onAutoCompleteSelect = (value) => {
    openUrl(value)
  }

  // 打开对应搜索
  const openUrl = (word) => {
    const url = platform.value.url
    const openUrl = url + word
    window.open(openUrl)
  }

  // 点击搜索按钮
  function onSubmit() {
    openUrl(keyWord.value)
  }
</script>
<style lang="less" scoped>
  .search-box {
    display: flex;
    .content {
      justify-content: center;
      width: 100%;
      height: 110px;
      margin: 0 auto;
      background: none;
      padding-top: 90px;
      z-index: 1;
      display: flex;
      height: 48px;
      .keylist {
        width: 100%;
        padding: 0;
        position: absolute;
        background: #fff;
        li {
          height: 30px;
          padding-left: 10px;
          display: flex;
          align-items: center;
          &:hover {
            background: #eee;
            color: #000;
          }
        }
      }
      .select {
        position: relative;
        height: 48px;
        .dropButton {
          border: 0;
          height: 48px;
        }
        .view {
          background: rgba(255, 255, 255, 0.9);
          height: 48px;
          color: #317ef3;
          width: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ul {
          position: absolute;
          left: 0;
          padding: 0;
          li {
            text-align: center;
            width: 60px;
            line-height: 46px;
            font-size: 15px;
            color: #484848;
            background: rgba(255, 255, 255, 0.9);
            border: 0;
            cursor: pointer;
            width: 80px;
            &:hover {
              background: #3385ff;
              color: #fff;
            }
          }
        }
      }
      .search {
        position: relative;
        height: 100%;
        height: 48px;
        .keyword {
          outline: 0;
          border: 1px solid #ccc;
          background: rgba(255, 255, 255, 0.2);
          color: #000000;
          padding-left: 8px;
          font-weight: bold;
          height: 48px;
          box-sizing: border-box;
        }
        .clear {
          width: 18px;
          line-height: 14px;
          cursor: pointer;
          text-align: center;
          font-size: 14px;
          color: #e6e6e6;
          height: 18px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 18px;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .buttton {
        width: 90px;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        outline: none;
        height: 48px;
        border: none;
      }
    }
  }

  :deep(.n-input) {
    border-radius: 0;
    height: 48px;
    line-height: 48px;
  }
</style>
