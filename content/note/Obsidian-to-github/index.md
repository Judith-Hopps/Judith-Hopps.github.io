---
title: 将 Obsidian 的整个文档上传到 GitHub 仓库
date: 2026-01-27T10:00:00
draft: false
categories:
  - note
tags:
  - Obsidian
  - Markdown
  - 小白
  - Github
---


# 一、环境确认

1. **GitHub**：已有仓库（比如 `the-yeti's-cave.github.io`）
    
2. **Git Bash**：已经可以在命令行执行 `git --version` 
    
3. **Obsidian**：写 Markdown 内容
    
4. **Obsidian Git 插件**：推荐使用，让提交推送更方便
---

## 4.Obsidian Git插件安装
- 关闭安全模式
![](Pasted%20image%2020260126164547.png)
- 进入社区插件市场
![](Pasted%20image%2020260126164638.png)
- 搜索“git"插件进行安装-启用
![](Pasted%20image%2020260126164734.png)
![](Pasted%20image%2020260126164750.png)


# 二、上传Github仓库
## 1.原理

- **改文件状态**
- **Commit:**「把现在的状态保存一下」
- **Push:**「把保存的东西发到 GitHub」
- **GitHub Pages 更新:**  「服务器看到新内容，重新部署」

## 2.操作步骤
- 创建一个测试文档用于上传。
![](Pasted%20image%2020260126164931.png)
- 按下Ctrl+P，打开命令面板
先选择Commit，等到其Commit了文档之后，然后再选择Push至Github服务器。
![](Pasted%20image%2020260126165828.png)
