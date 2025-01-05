---
title: 博弈论
date: 2025.1.3
updated:
tags:
  - 博弈论
categories: 社科
keywords:
description:
top_img: https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
comments:
cover: https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
swiper_index: 2
top_group_index: 2
background: "#fff"
---

# 博弈类型和结构化思维

科学的起点是分类，只有通过分类才能区分事物之间的不同。

博弈的分类最常见的有两种：

- 静态博弈和动态博弈
- 完全信息博弈和不完全信息博弈

## 静态博弈和动态博弈

按照博弈参与者做出决策或行动**有无先后顺序**来区分，博弈可以分为静态博弈和动态博弈。

静态博弈是指在博弈中，至少逻辑时间上是同时（并不保证物理时间上的同时性）。

动态博弈是指在博弈中，参与者有先后顺序，且后行动者能够观察到先行动者所选择的行动。

## 完全信息博弈与不完全信息博弈

按照**参与者对其他参与者的了解程度**来区分，博弈又分为完全信息博弈（games of complete information）和不完全信息博弈（games of incomplete information），

完全信息博弈是指在博弈过程中，每个参与者对其他参与者的类型、策略空间及损益函数的信息有准确的了解。通俗来讲，不完全信息博弈是指总有一些信息不是所有参与者都知道的。

## 结构化思维

当某样东西就可以从两个不同的维度进行分类的时候，如果把两个维度组合到一个平面上，就可以构建出一种结构化的组合方式。

| 行动顺序/信息 | 完全信息                                                     | 不完全信息                                                   |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 静态博弈      | 完全信息静态博弈（纳什均衡 Nash equilibrium）                | 不完全信息静态博弈（贝叶斯纳什均衡 bayesian Nash equilibrium） |
| 动态博弈      | 完全信息动态博弈（子博弈精炼纳什均衡 subgame perfect Nash equilibrium） | 不完全信息动态博弈（精炼贝叶斯纳什均衡 perfect bayesian Nash equilibrium） |

以上4类博弈，按照分析的难易程度：完全信息静态博弈 < 完全信息动态博弈 < 不完全信息静态博弈 < 不完全信息动态博弈

## 合作博弈与非合作博弈

如果按照**博弈者是否能够达成一种具有约束力的协议**来区分，博弈可以分为合作博弈（cooperative game）和非合作博弈（noncooperative game）。

合作博弈是指参与者能够达成一种具有约束力的协议，在协议范围内选择有利于双方的策略。

非合作博弈则无法达成这种协议，在该博弈中，参与人需要解决的问题是：“当其他参与者会对自己的策略选择做出最优反应时，我的最优策略是什么？”。

## 零和博弈与非零和博弈

从博弈结果看，博弈可以分为零和博弈与非零和博弈。

零和博弈是指博弈前的损益总和与博弈后的损益综合相等，博弈过程只是损益在不同博弈者之间的重新分配。

非零和博弈是指博弈后的损益总和大于或小于博弈前的损益综合，有因此分为“正和博弈”和”负和博弈“。

