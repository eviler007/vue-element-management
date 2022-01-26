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
            Theme Color
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
              <span :style="{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                marginRight: '6px',
                borderRadius: '2px',
                backgroundColor: theme.color
              }"></span>
              <span>{{ theme.name }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown class="e-header-user-menu" popper-class="e-header-user-menu-popper">
        <el-avatar
          class="e-header-avatar"
          :size="40"
          :src="avatarUrl"
        ></el-avatar>
        <span class="e-header-username">
          {{ username }}
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><user /></el-icon>Acount Center
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><setting /></el-icon>Acount Setting
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon >
                <logout />
              </el-icon>Logout
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import useAppStore from '@/hooks/useAppStore'
import useUserStore from '@/hooks/useUserStore'

const { isCollapse, theme, themeList, toggleCollapse, changeTheme } = useAppStore()
const { username, avatarUrl } = useUserStore()

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

<style lang="scss">
.e-header-user-menu-popper {
  white-space: nowrap;
}
</style>