<template>
  <div class="e-statistic">
    <div class="e-stat-title">{{ title }}</div>
    <div class="e-stat-value-wrapper">
      <span class="e-stat-value">{{ numThousand(value) }}</span>
      <span v-if="suffix" class="e-stat-suffix">{{ suffix }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { numThousand } from '@/utils/numFormat'

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: Number
    },
    suffix: {
      required: false,
      type: String
    }
  },
  methods: {
    numThousand
  }
})

</script>

<style lang="scss" scoped>
.e-statistic {
  text-align: right;
  padding: 0 var(--e-box-edge-size-default);
  .e-stat-title {
    font-size: 0.9rem;
    color: var(--el-color-info);
  }
  .e-stat-value-wrapper {
    margin-top: 16px;
    .e-stat-value {
      font-size: 1.4rem;
    }
    .e-stat-suffix {
      color: var(--el-color-info);
    }
  }
}
</style>