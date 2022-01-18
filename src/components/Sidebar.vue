<template>
  <nav class="sidebar">
    <el-scrollbar>
      <el-menu
        default-active="2"
        class="sidebar-menu"
        :collapse="isCollapse"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        :collapse-transition="false"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </nav>
</template>

<script setup lang="ts">
import { Location, Menu as IconMenu, Document, Setting } from '@element-plus/icons-vue'
import useAppHelper from '@/hooks/useAppHelper'

const { isCollapse, toggleCollapse } = useAppHelper()

</script>

<style lang="scss" scoped>

.sidebar {
  background-color: #324157;
  .sidebar-menu {
    width: 100%;
    border: none;
  }
}
</style>