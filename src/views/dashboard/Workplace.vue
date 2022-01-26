<template>
  <page-header-wrapper>
    <template #content>
      <div class="e-work-info">
        <div class="e-user-info">
          <el-avatar :src="avatarUrl" :size="80" />
          <div class="e-text">
            <div class="e-hello-text">
              下午好，Eviler，休息一会儿吧
            </div>
            <div class="e-sub-text">
              前端工程师 - 某某某事业群 - 某某项目组
            </div>
          </div>
        </div>
        <div class="e-project-info">
          <div class="e-stat-item">
            <e-statistic title="项目数" :value="34" />
          </div>
          <div class="e-stat-item">
            <e-statistic title="团队内排名" :value="12" suffix=" / 24" />
          </div>
          <div class="e-stat-item">
            <e-statistic title="项目访问" :value="2233" />
          </div>
        </div>
      </div>
    </template>
    <el-row class="e-wrapper-raw" :gutter="24">
      <el-col :span="24" :lg="16">
        <el-card class="e-project-working">
          <template #header>
            <div class="e-card-header">
              <span>进行中的项目</span>
              <el-button class="e-card-h-button" type="text">全部项目</el-button>
            </div>
          </template>
        </el-card>
      </el-col>
      <el-col :span="24" :lg="8">
        <el-card class="e-quick-nav" header="快速开始 / 便捷导航">
          <el-button class="e-quick-item" plain type="text">操作一</el-button>
          <el-button class="e-quick-item" type="text">操作二</el-button>
          <el-button class="e-quick-item" type="text">操作三</el-button>
          <el-button class="e-quick-item" type="text">操作四</el-button>
          <el-button class="e-quick-item" type="text">操作五</el-button>
          <el-button class="e-quick-item" type="text">操作六</el-button>
          <el-button class="e-quick-item" plain size="small">
            <el-icon><plus /></el-icon>添加
          </el-button>
        </el-card>
      </el-col>
    </el-row>
  </page-header-wrapper>
</template>

<script setup lang="ts">
import PageHeaderWrapper from '@/layouts/PageHeaderWrapper.vue'
import EStatistic from '@c/EStatistic.vue'
import useUserStore from '@/hooks/useUserStore'

const { avatarUrl } = useUserStore()

</script>

<style lang="scss" scoped>
.e-work-info {
  display: flex;
  justify-content: space-between;
  .e-user-info {
    display: flex;
    .e-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 20px;
      .e-hello-text {
        font-size: 1.3rem;
      }
      .e-sub-text {
        color: var(--el-color-info);
        font-size: 0.9rem;
        margin-top: 12px;
      }
    }
  }
  .e-project-info {
    display: flex;
    align-items: center;
    .e-stat-item + .e-stat-item {
      position: relative;
      &::before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 70%;
        background-color: var(--el-color-info-light);
        position: absolute;
        top: 15%;
        left: 0;
      }
    }
  }
}
.e-wrapper-raw {
  .el-col {
    margin-bottom: var(--e-box-edge-size-default)
  }
}
.e-project-working {
  .e-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    :deep(.el-button--text) {
      padding: 0;
      height: unset;
    }
  }
}
.e-quick-nav {
  .e-quick-item {
    width: 25%;
    color: inherit;
  }
  .e-quick-item + .e-quick-item {
    margin-left: 0;
  }
}
</style>