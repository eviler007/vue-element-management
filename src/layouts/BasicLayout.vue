<template>
  <div class="e-basic-layout" :class="{ 'e-sidebar-collapsed': isCollapse}">
    <e-sidebar class="e-sidebar"></e-sidebar>
    <section class="e-page-right e-header-fixed">
      <el-scrollbar>
        <e-header class="e-header"></e-header>
        <main class="e-main-wrapper">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </main>
      </el-scrollbar>
    </section>
  </div>
</template>

<script setup lang="ts">
import useAppHelper from '@/hooks/useAppHelper'

import EHeader from '@/layouts/components/Header.vue'
import ESidebar from '@/layouts/components/Sidebar.vue'

const { isCollapse } = useAppHelper()

</script>

<style lang="scss" scoped>
.e-basic-layout {
  position: relative;
  height: 100%;
  .e-sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--e-sidebar-width);
    height: 100%;
    z-index: 3;
  }
  .e-page-right {
    position: absolute;
    top: 0;
    left: var(--e-sidebar-width);
    right: 0;
    height: 100%;
  }
  .e-page-right.e-header-fixed {
    .e-header {
      position: fixed;
      top: 0;
      left: var(--e-sidebar-width);
      width: calc(100% - var(--e-sidebar-width));
      background: var(--e-bgcolor-main);
      z-index: 2;
    }
    .e-main-wrapper {
      margin-top: var(--e-header-height);
    }
  }
  .e-sidebar, :deep(.e-sidebar .el-menu), .e-page-right, .e-header {
    transition: all var(--e-anim-speed-normal);
  }
}
.e-basic-layout.e-sidebar-collapsed {
  .e-sidebar {
    width: var(--e-sidebar-collapsed-width);
  }
  .e-page-right, .e-header, .e-page-right.e-header-fixed .e-header {
    left: var(--e-sidebar-collapsed-width);
  }
  .e-header, .e-page-right.e-header-fixed .e-header {
    width: calc(100% - var(--e-sidebar-collapsed-width));
  }
}
</style>