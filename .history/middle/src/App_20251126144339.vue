<template>
  <el-container class="app-container">
    <el-header class="app-header">
      <h1>Module Federation - Middle 中间层模块</h1>
    </el-header>
    <el-main class="app-main">
      1
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
// 使用路由模式，通过 router-view 渲染组件
</script>

<style scoped>
.app-container {
  height: 100vh;
}

.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
