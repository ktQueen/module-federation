#!/bin/bash

# 获取脚本所在目录的绝对路径
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

echo "=========================================="
echo "启动 Module Federation 开发环境（路由模式）"
echo "=========================================="
echo ""

# 检查并构建远程模块 (第一级)
if [ ! -d "remote/dist" ]; then
  echo "📦 首次运行，正在构建远程模块..."
  (cd "$SCRIPT_DIR/remote" && npm install 2>/dev/null || true && npm run build)
  echo "✅ 远程模块构建完成"
  echo ""
fi

# 检查并构建中间层模块 (第二级，remote 形态)
if [ ! -d "middle/dist" ]; then
  echo "📦 首次运行，正在构建中间层模块 (remote)..."
  (cd "$SCRIPT_DIR/middle" && npm install 2>/dev/null || true && npm run build:remote)
  echo "✅ 中间层模块构建完成"
  echo ""
fi

# 启动远程模块预览（后台运行）- 必须先启动第一级
echo "🚀 启动远程模块预览（端口 5173）..."
(cd "$SCRIPT_DIR/remote" && npm run preview > /tmp/remote-preview.log 2>&1) &
REMOTE_PID=$!

# 等待第一级启动
sleep 2

# 启动中间层模块预览（后台运行）- 第二级依赖第一级（remote 形态）
echo "🚀 启动中间层模块预览（端口 5174）..."
(cd "$SCRIPT_DIR/middle" && npm run preview:remote > /tmp/middle-preview.log 2>&1) &
MIDDLE_PID=$!

# 等待模块启动
echo "⏳ 等待模块启动..."
sleep 3

# 检查模块是否启动成功（先检查第一级）
if curl -s http://localhost:5173/assets/remoteEntry.js > /dev/null 2>&1; then
  echo "✅ 远程模块启动成功"
else
  echo "❌ 远程模块启动失败，请检查日志: /tmp/remote-preview.log"
  kill $REMOTE_PID 2>/dev/null
  kill $MIDDLE_PID 2>/dev/null
  exit 1
fi

# 再检查第二级
if curl -s http://localhost:5174/assets/remoteEntry.js > /dev/null 2>&1; then
  echo "✅ 中间层模块启动成功"
else
  echo "❌ 中间层模块启动失败，请检查日志: /tmp/middle-preview.log"
  kill $REMOTE_PID 2>/dev/null
  kill $MIDDLE_PID 2>/dev/null
  exit 1
fi

echo ""
echo "🚀 启动容器应用（端口 5175）..."
(cd "$SCRIPT_DIR/shell" && npm install 2>/dev/null || true && npm run dev) &
SHELL_PID=$!

echo ""
echo "=========================================="
echo "✅ 所有服务已启动（路由模式）"
echo "=========================================="
echo ""
echo "📍 访问地址："
echo "   第三级 - 容器应用 (shell): http://localhost:5175"
echo "   第二级 - 中间层模块 (middle): http://localhost:5174"
echo "   第一级 - 远程模块 (remote): http://localhost:5173"
echo ""
echo "📝 日志文件："
echo "   中间层模块: /tmp/middle-preview.log"
echo "   远程模块: /tmp/remote-preview.log"
echo ""
echo "🛑 按 Ctrl+C 停止所有服务"
echo ""

# 等待中断信号
trap "echo ''; echo '正在停止服务...'; kill $MIDDLE_PID $REMOTE_PID $SHELL_PID 2>/dev/null; echo '服务已停止'; exit" INT
wait
