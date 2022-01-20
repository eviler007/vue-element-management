<template>
  <aside class="e-sidebar">
    <Logo />
    <el-scrollbar>
      <el-menu
        :default-active="currActive"
        class="e-sidebar-menu"
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
import Logo from './Logo.vue'
import MenuItem from './MenuItem.vue'
import useAppHelper from '@/hooks/useAppHelper'
import { useRoute } from 'vue-router'
import { routerToMenu } from '@/router/router.config'

const { isCollapse, toggleCollapse } = useAppHelper()
const { path: currActive } = useRoute()

</script>

<style lang="scss" scoped>

.e-sidebar {
  box-shadow: 0px 0px 4px 0px #aaa;
  .e-sidebar-menu {
    width: 100%;
    border: none;
  }
}
</style>