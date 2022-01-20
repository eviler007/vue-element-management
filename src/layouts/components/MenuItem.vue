<template>
  <el-sub-menu v-if="menu.children && menu.children.length" :index="menu.path">
    <template #title>
      <menu-title :menu="menu" />
    </template>
    <menu-item
      v-for="menu in menu.children"
      :key="menu.name"
      :menu="menu"/>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <menu-title :menu="menu" />
  </el-menu-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import MenuTitle from './MenuTitle.vue'

export default defineComponent({
  name: 'MenuItem',
  components: { MenuTitle },
  props: {
    menu: {
      type: Object as PropType<RouteRecordRaw>,
      required: true
    }
  }
})
</script>

<style>

</style>