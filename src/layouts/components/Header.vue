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
      <el-dropdown class="e-header-theme-menu">
        <el-button type="text">
          <span class="el-dropdown-link">
            主题
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="theme in themeList"
              :key="theme.key"
              @click="changeTheme(theme.key)"
              >
              {{ theme.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="e-header-user-menu" popper-class="e-header-dropdown-popper">
        <el-avatar
          class="e-header-avatar"
          :size="40"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <span class="e-header-username">
          Eviler
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

const { isCollapse, theme, themeList, toggleCollapse, changeTheme } = useAppHelper()

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
    height: 100%;
    .e-header-theme-menu {
    }
    .e-header-user-menu {
      height: 100%;
      .e-header-username {
        margin-left: 0.6rem;
      }
      :deep(.el-tooltip__trigger) {
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        padding:0 0.6rem;
        &:hover {
          background-color: var(--e-avatar-bgcolor)
        }
      }
    }
  }
}
</style>

<style>
.e-header-dropdown-popper {
  white-space: nowrap;
}
</style>