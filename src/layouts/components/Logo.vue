<template>
  <div class="e-logo">
    <el-button to="/" class="e-logo-btn" type="text">
      <el-icon :size="35"><eleme /></el-icon>
      <h1 v-show="!isCollapse" class="e-logon-title">Element-Plus</h1>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import useAppStore from '@/hooks/useAppStore'
const { isCollapse } = useAppStore()

</script>

<style lang="scss" scoped>
.e-logo {
  display: flex;
  align-items: center;
  height: var(--e-header-height);
  line-height: var(--e-header-height);
  padding: 12px;
  overflow: hidden;
  background-color: var(--e-layout-bg-color);
  .e-logo-btn {
    .e-logon-title {
      margin-left: 0.5rem;
    }
  }
}
</style>