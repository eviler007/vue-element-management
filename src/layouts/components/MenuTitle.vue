<template>
  <el-icon v-if="menu.meta?.icon">
    <component :is="menu.meta?.icon"/>
  </el-icon>
  <span>{{ menu.meta?.title }}</span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'MenuTitle',
  props: {
    menu: {
      type: Object as PropType<RouteRecordRaw>,
      required: true
    }
  }
})
</script>
