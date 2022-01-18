<template>
  <header class="header">
    <el-button
      class="collapse-btn"
      type="text"
      @click="toggleCollapse">
      <el-icon size="22" color="#fff">
        <component :is="isCollapse ? Expand : Fold"></component>
      </el-icon>
    </el-button>
    <h1 class="logo">后台管理系统</h1>
    <div class="header-right">
      <el-tooltip :content="!isFullScreen ? '全屏': '取消全屏'">
        <el-button type="text" @click="toggleFullScreen">
          <el-icon size="24" color="#fff"><full-screen /></el-icon>
        </el-button>
      </el-tooltip>
      <el-badge class="header-message" is-dot>
        <el-tooltip>
          <el-button type="text">
            <el-icon size="24" color="#fff"><bell /></el-icon>
          </el-button>
          <template #content>
            您有<span style="color: var(--el-color-danger)">800</span>条未读消息
          </template>
        </el-tooltip>
      </el-badge>
      <el-avatar
        class="header-avatar"
        :size="40"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <el-dropdown class="header-right-menu" popper-class="header-dropdown-popper">
        <span>
          Eviler
          <el-icon color="#fff"><arrow-down /></el-icon>
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
import { Expand, Fold, FullScreen, Bell, ArrowDown } from '@element-plus/icons-vue'
import useAppHelper from '@/hooks/useAppHelper'

const { isFullScreen, isCollapse, toggleCollapse, toggleFullScreen } = useAppHelper()

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #242f42;
  color: #fff;
  padding: 0 1rem;
  .logo {
    font-size: 1.4rem;
    margin-left: 1rem;
  }
  .header-right {
    display: flex;
    align-items: center;
    margin-left: auto;
    .header-message, .header-avatar, .header-right-menu {
      margin-left: 0.8rem;
    }
    .header-right-menu {
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>

<style>
.header-dropdown-popper {
  white-space: nowrap;
}
</style>