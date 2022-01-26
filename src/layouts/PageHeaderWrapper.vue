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

      <div v-if="title !== false" class="e-page-header-title">
        {{ !!title && typeof title === 'string' && title || defaultTitle }}
      </div>

      <div v-if="subTitle" class="e-page-header-subtitle">
        {{ subTitle }}
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

<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, useSlots } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: [String, Boolean],
      default: true
    },
    subTitle: {
      type: String
    }
  },
  setup() {
    const routeList = useRoute().matched
    const slotContent = !!useSlots().content
    const defaultTitle = routeList[0].meta.title
    return {
      routeList,
      slotContent,
      defaultTitle
    }
  }
})

</script>

<style lang="scss" scoped>
.e-page-header-wrapper {
  .e-page-header {
    padding: var(--e-box-edge-size-default);
    box-shadow: 0 -2px 4px 0 var(--e-boxshadow-color);
    background-color: var(--e-layout-bg-color);
    .e-page-header-breadcrumb {
      :deep(.el-breadcrumb) .el-breadcrumb__inner{
        font-weight: normal;
      }
    }
    .e-page-header-title {
      padding-top: var(--e-box-edge-size-small);
      font-weight: bold;
    }
    .e-page-header-subtitle {
      padding-top: var(--e-box-edge-size-mini);
      color: var(--el-color-info);
    }
    .e-page-header-content {
      padding-top: var(--e-box-edge-size-small);
    }
  } 
  .e-page-wrapper {
    padding: var(--e-box-edge-size-default);
  }
}
</style>