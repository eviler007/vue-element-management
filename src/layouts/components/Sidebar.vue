<template>
  <aside class="e-sidebar">
    <Logo />
    <el-scrollbar>
      <el-menu
        class="e-sidebar-menu"
        :default-active="currActive"
        :collapse="isCollapse"
        :collapse-transition="false"
        router>
        <menu-item
          v-for="menu in routerToMenu"
          :key="menu.name"
          :menu="menu"/>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import MenuItem from './MenuItem.vue'
import useAppStore from '@/hooks/useAppStore'
import { routerToMenu } from '@/router/router.config'

const { isCollapse, toggleCollapse } = useAppStore()

const currActive = toRef(useRoute(), 'path')

</script>

<style lang="scss" scoped>

.e-sidebar {
  box-shadow: 0px 0px 4px 0px var(--e-boxshadow-color);
  background-color: var(--e-layout-bg-color);
  .e-sidebar-menu {
    width: 100%;
    border: none;
  }
}
</style>