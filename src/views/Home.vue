<template>
  <div class="home" :class="{ 'sidebar-collapsed': isCollapse}">
    <e-header></e-header>
    <e-sidebar></e-sidebar>
    <div class="content-wrapper">asdsadas</div>
  </div>
</template>

<script setup lang="ts">
import useAppHelper from '@/hooks/useAppHelper'

import EHeader from '@c/Header.vue'
import ESidebar from '@c/Sidebar.vue'

const { isCollapse } = useAppHelper()

</script>

<style lang="scss" scoped>
$headerHeight: 4rem;
$sidebarWidth: 14rem;
$sidebarCollapsedWidth: 64px;

.home {
  position: relative;
  .header {
    height: $headerHeight;
  }
  .sidebar {
    position: absolute;
    top: $headerHeight;
    bottom: 0;
    width: $sidebarWidth;
    overflow-y: auto;
  }
  .content-wrapper {
    position: absolute;
    top: $headerHeight;
    bottom: 0;
    left: $sidebarWidth;
    right: 0;
  }
  .sidebar, ::v-deep .sidebar .el-menu, .content-wrapper {
    transition: all .3s!important;
  }
}
.home.sidebar-collapsed {
  .sidebar {
    width: $sidebarCollapsedWidth;
  }
  .content-wrapper {
    left: $sidebarCollapsedWidth;
  }
}
</style>