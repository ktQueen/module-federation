<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <h1>Module Federation - Remote 远程模块</h1>
    </el-header>
    <el-main class="app-main">
      <!-- 使用路由模式展示当前页面（按钮 / 卡片 / 表格） -->
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
// 这里暂时不需要脚本逻辑，模板已满足编译要求
</script>

<style scoped>
.app-container {
  height: 100vh;
}

.app-header {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.app-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
}

.app-main {
  background: #f5f7fa;
  padding: 20px;
  overflow-y: auto;
}
</style>
