<template>
  <div class="e-page-header-wrapper">
    <div class="e-page-header">
      <div class="e-page-header-breadcrumb">
        <slot name="breadcrumb" :routeList="routeList">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="route in routeList"
              :key="route.name"
              :to="route">
              {{ route.meta.title }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </slot>
      </div>
      <div v-if="slotContent" class="e-page-header-content">
        <slot name="content">
        </slot>
      </div>
    </div>
    <div class="e-page-wrapper">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useSlots } from 'vue'

const routeList = useRoute().matched

const slotContent = !!useSlots().content

</script>

<style lang="scss" scoped>
.e-page-header-wrapper {
  .e-page-header {
    padding: var(--e-box-edge-size-default);
    box-shadow: 0 -2px 4px 0 var(--e-boxshadow-color);
    background-color: var(--e-layout-bg-color);
    .e-page-header-breadcrumb {

    }
    .e-page-header-content {
      padding: var(--e-box-edge-size-small) 0;
    }
  } 
  .e-page-wrapper {
    padding: var(--e-box-edge-size-default);
  }
}
</style>