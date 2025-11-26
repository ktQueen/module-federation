<template>
  <div class="home">
    <el-card class="welcome-card">
      <template #header>
        <div class="card-header">
          <span>欢迎使用 Module Federation</span>
        </div>
      </template>
      <div class="content">
        <el-alert
          title="中间层模块（Middle Module）"
          type="success"
          :closable="false"
          show-icon
        >
          <template #default>
            <p>
              这是中间层模块，既是 remote（暴露给第三级）又是 host（加载第一级
              remote）。
            </p>
            <p><strong>使用路由模式加载远程组件</strong></p>
          </template>
        </el-alert>

        <el-divider />

        <el-alert
          title="加载第一级 Remote 组件（路由模式）"
          type="info"
          :closable="false"
          show-icon
          style="margin-bottom: 20px"
        >
          <template #default>
            <p>下面展示从第一级 remote 模块通过路由方式加载的组件：</p>
          </template>
        </el-alert>
        <el-menu
          :default-active="activeIndex"
          class="header-menu"
          mode="horizontal"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/button">远程按钮</el-menu-item>
          <el-menu-item index="/card">远程卡片</el-menu-item>
          <el-menu-item index="/table">远程表格</el-menu-item>
        </el-menu>
        <el-tabs v-model="activeTab" @tab-change="handleTabChange">
          <el-tab-pane label="远程按钮" name="button">
            <Suspense>
              <template #default>
                <router-view v-if="activeTab === 'button'" />
              </template>
              <template #fallback>
                <el-skeleton :rows="5" animated />
              </template>
            </Suspense>
          </el-tab-pane>
          <el-tab-pane label="远程卡片" name="card">
            <Suspense>
              <template #default>
                <router-view v-if="activeTab === 'card'" />
              </template>
              <template #fallback>
                <el-skeleton :rows="5" animated />
              </template>
            </Suspense>
          </el-tab-pane>
          <el-tab-pane label="远程表格" name="table">
            <Suspense>
              <template #default>
                <router-view v-if="activeTab === 'table'" />
              </template>
              <template #fallback>
                <el-skeleton :rows="5" animated />
              </template>
            </Suspense>
          </el-tab-pane>
        </el-tabs>

        <el-divider />

        <el-row :gutter="20">
          <el-col :span="8">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-icon><Connection /></el-icon>
                  <span>模块联邦</span>
                </div>
              </template>
              <p>使用 Module Federation 实现微前端架构</p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-icon><Box /></el-icon>
                  <span>Vue 3</span>
                </div>
              </template>
              <p>基于 Vue 3 Composition API 构建</p>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <el-icon><Grid /></el-icon>
                  <span>路由模式</span>
                </div>
              </template>
              <p>统一使用路由模式加载远程组件</p>
            </el-card>
          </el-col>
        </el-row>

        <el-divider />

        <el-steps :active="2" finish-status="success">
          <el-step title="创建项目" />
          <el-step title="配置 Module Federation" />
          <el-step title="路由模式加载远程模块" />
        </el-steps>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { Connection, Box, Grid } from "@element-plus/icons-vue";

const router = useRouter();
const route = useRoute();
const activeTab = ref("button");

// 监听 tab 变化，同步路由（路由模式）
const handleTabChange = (tabName) => {
  if (router && tabName) {
    router.push(`/${tabName}`).catch(() => {
      // 忽略重复导航错误
    });
  }
};

// 监听路由变化，同步 tab
watch(
  () => route.path,
  (path) => {
    if (path === "/button" || path.startsWith("/button")) {
      activeTab.value = "button";
    } else if (path === "/card" || path.startsWith("/card")) {
      activeTab.value = "card";
    } else if (path === "/table" || path.startsWith("/table")) {
      activeTab.value = "table";
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.content {
  padding: 10px 0;
}

.el-card {
  height: 100%;
}

.el-card p {
  margin: 0;
  color: #606266;
  line-height: 1.6;
}
</style>
