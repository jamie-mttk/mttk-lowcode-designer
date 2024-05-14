# MTTK Lowcode Engine 和 MTTK Open BI

[English Readme](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/README.md)

## 简介

### MTTK Open BI

一个用户友好的轻量级BI工具。

它是MTTK Lowcode Engine的一组插件，因此用户手册和开发手册与MTTK Low Code Engine合并在一起。

- 轻量级  
  不提供数据处理引擎，所有数据处理取决于目标数据库服务器。

- 易于使用  
  例如，构建一个 echart 需要提供许多配置/选项，如标题位置、网格位置等。为了简化使用，用户只需配置重要的选项，其他选项将由 BI 系统自动设置。

### MTTK Lowcode Engine

一个用于快速开发 HTML5 应用程序的平台，无需或只需少量代码。

大多数 Lowcode 是表单生成 + 工作流，因此它只能开发一些简单的项目，如请假申请、调查。我们的设计理念如下所述。

- 基于 Vue3  
它可以被视为一个可视化的 Vue3 编辑器，用于操作数据/计算/方法/组件属性等。因此，它可以做与 Vue3 相同的事情。
- 可插拔  
   使用 Lowcode 构建具有许多自定义代码的项目并不是一个好主意，但在特定场景下使用 Lowcode 是有价值的。所以如何使 Lowcode 适应特定场景？答案是插件。MTTK Open BI 是插件可以做的一个很好的示例。首先，组件库可以扩展，其次，登录页面/应用资源/属性编辑器等也可以通过插件机制进行扩展。

## 在线演示

在线演示可在 [http://139.129.210.30:8825](http://139.129.210.30:8825) 访问

用户名: admin
密码: 123456

请勿更改密码，数据每天将被重置。
由于服务器性能较差，访问速度可能会较慢，尤其是第一次访问，因为需要下载一些 JS 文件。

## 文档

|文档|描述|
|---|---|
|README|此文件|
|[用户手册](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/UserManual.md)|如何使用|
|[开发手册](https://github.com/jamie-mttk/mttk-lowcode-designer/master/DeveloperManual.md)|如何开发新插件|
|[发布说明](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/ReleaseNote.md)|变更历史|

## 屏幕截图

![登录](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/login.png)
![应用列表](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/app_list.png)
![启动](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/launch.png)
![数据模型](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/data_model.png)
![设计](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/design.png)
![页面设计](https://github.com/jamie-mttk/mttk-lowcode-designer/blob/master/src/screenCaptures/single_page.png)

### 项目列表

有几个与 MTTK Open BI 相关的项目，如下所述

|项目|描述|
|---|---|
|[mttk-lowcode-server](https://github.com/jamie-mttk/mttk-lowcode-server) | 一个使用 mttk-lowcode-designer 编译结果作为静态资源的 spring boot 项目。它既是 Lowcode 引擎后端，也是 BI 后端 |
|[mttk-lowcode-engine](https://github.com/jamie-mttk/mttk-lowcode-engine) | Lowcode 引擎前端，编译结果是一个名为 'mttk-lowcode-engine' 的 JS 包。|
|[mttk-vue-wrap](https://github.com/jamie-mttk/mttk-vue-wrap) | Lowcode 引擎的基础技术。|
|[mttk-bi](https://github.com/jamie-mttk/mttk-bi) | 一组 Lowcode 插件，用于实现轻量级 BI。编译结果是一个名为 'mttk-bi' 的 JS 包。|
|[mttk-lowcode-designer](https://github.com/jamie-mttk/mttk-lowcode-designer) | 一个结合了 mttk-lowcode-engine 和 mttk-bi 的项目，编译结果是一个 index.html + JS/CSS，可启动。|
|待定|开发的项目也可以发布到一个独立的 Vue 项目中|

## 特点

### 易于使用

所有操作都通过网页上的拖放完成。创建图表的操作也简单直观，还提供在线帮助。

### 可扩展性

通过构建自己的插件（如新组件来呈现数据），可以轻松扩展 BI 功能。
如何构建新插件在开发手册中有描述（尚未完成）

### 授权控制

基于资源/所有者/所有者组/角色的概念构建了完整的授权控制。更多详细信息请参阅用户手册。

## 安装

本章指导如何将 MTTK Lowcode Engine + MTTK Open BI 安装到本地机器上。

1. 安装 mongodb  
    如果已安装，请跳过此步骤
    从 [MongoDB 官方网站](https://www.mongodb.com/) 下载 mongodb
    需要的最低版本为 4.2，建议使用最新版本。
    安装 mongodb。
2. 安装最新版本的 Java（最低版本 20）
3. 从 [这里](https://github.com/jamie-mttk/mttk_lowcode_api/blob/main/lowcode.jar) 下载 lowcode.jar  
    此 jar 包含所有必要的 JS/CSS/HTML 作为静态资源。
4. 启动  
   运行以下命令，将 %xxx% 替换为正确的路径
   %your java path%/bin/java -jar %your lowcode jar path%/lowcode.jar
   默认情况下，lowcode.jar 将连接到本地 mongodb:27017，不需要授权。管理员帐户和其他配置将自动创建在 mongodb 中。
   如果 mongodb 不在本地机器上或授权已启用，则需要创建自己的 application.properties，然后使用 spring boot 命令参数 --spring.config.location 启动。
   顺便说一下，后端尚未定义，将在以后进行优化。
   下面是 application.properties 的模板

···sh
#Web 服务器端口
server.port=8825

#数据库
spring.data.mongodb.uri=mongodb://localhost:27017
spring.data.mongodb.database=mttk_bi

#
spring.servlet.multipart.enabled=false
···

5. 完成

  访问 URL http://localhost:8825/，用户名为 admin，密码为 123456

## 许可证

Mttk Lowcode Engine 和 MTTK Open BI 是根据 MIT 许可证的开源软件。

## 联系我

在 [github 讨论区](https://github.com/jamie-mttk/mttk-lowcode-designer/discussions) 联系我。