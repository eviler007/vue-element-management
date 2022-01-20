<template>
  <header class="e-header">
    <el-button
      class="e-collapse-btn"
      type="text"
      @click="toggleCollapse">
      <el-icon size="22">
        <component :is="isCollapse ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </el-button>
    <div class="e-header-right">

      <el-tooltip :content="!isFullScreen ? '全屏': '取消全屏'">
        <el-button type="text" @click="toggleFullScreen">
          <el-icon size="24"><full-screen /></el-icon>
        </el-button>
      </el-tooltip>

      <el-avatar
        class="e-header-avatar"
        :size="40"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>

      <el-dropdown class="e-header-right-menu" popper-class="e-header-dropdown-popper">
        <span>
          Eviler
          <el-icon><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>项目仓库</el-dropdown-item>
            <el-dropdown-item>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import useAppHelper from '@/hooks/useAppHelper'

const { isFullScreen, isCollapse, toggleCollapse, toggleFullScreen } = useAppHelper()

</script>

<style lang="scss" scoped>
.e-header {
  display: flex;
  align-items: center;
  height: var(--e-header-height);
  width: 100%;
  padding: 0 1rem;
  box-shadow: 3px 0px 4px 0px var(--e-boxshadow-color);
  .e-header-right {
    display: flex;
    align-items: center;
    margin-left: auto;
    .e-header-message, .e-header-avatar, .e-header-right-menu {
      margin-left: 0.8rem;
    }
    .e-header-right-menu {
      cursor: pointer;
    }
  }
}
</style>

<style>
.e-header-dropdown-popper {
  white-space: nowrap;
}
</style>