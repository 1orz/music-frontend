# 在线音乐点播系统（仿网易云音乐/QQ音乐）

## 作业简介

>一款在线音乐点播系统.

## 预览

![](demo.png)

## 特性 Feature
>客户端

+ 支持用户注册、登录、点播、收藏、评论、搜索等功能; 

>管理端

+ 支持管理员登录、管理用户、管理音乐、管理评论等功能。支持用户上传头像等功能。

>服务端

+ 支持docker 容器化一键快速部署。
+ 1.数据库使用 (MySQL version: 8.0.23)√
+ 2.RESETful 标准化api风格开发 √
+ 3.Java (Spring Boot + MyBatis-Plus)后端开发√
+ 4.使用Git 进行项目管理 √
+ 5.使用Qcloud腾讯云服务器 远程开发√
+ 6.项目直接运行于Qcloud腾讯云服务器 操作系统为Ubuntu20.10√
+ 7.使用redis 进行热点数据缓存，key-value高性能内存型数据库 √
+ 8.全部Docker容器化 且使用docker-compose进行项目管理，以快速部署生产环境。依赖docker和docker-compose 所有镜像的base image都优先使用alpine
(Why Alpine ? To Small, To Simple, To Secure.) 进一步缩小镜像体积，可以快速部署 √
+ 9.使用portainer进行docker容器管理，Web端 UI可视化管理。替代传+ 统Terminal docker cli枯燥的操作模式 √

## 技术栈:

>客户端

+ 前端(用户端client): Vue 3.2.13 + Vue-Router 4.0.3 + Vuex 4.0.0 + Axios 0.26.0 + Element-UI-PLUS 2.0.4

+ 前端(管理端): Vue 3.2.13 + Vue-Router 4.0.3 + Vuex 4.0.0 + Axios 0.26.0 + Element-UI-PLUS 2.0.4 + Echarts 5.3.2

+ 后端: SpringBoot 2.5.2 + MyBatis-Plus 3.5.1 + MySQL 8.0.30 + Redis 7.0.4 + Caddy 2.5.2 + Maven 3.8.6-jdk-8 + Docker 20.10.20 + Docker-compose 1.29.2 + Portainer 2.15.1 Community Edition + phpMyAdmin 5.2.0

+ 注释: 本项目使用的是docker-compose一键部署，所以需要安装docker和docker-compose 所有镜像的base image都优先使用alpine(Why Alpine ? To Small, TO Simple, To Secure.) 所以镜像体积都很小，可以快速部署

+ 运行环境:
服务器: 腾讯云 轻量应用服务器 北京地区 BGP多线优化 4Core + 4GB with 80 GB SSD

+ 操作系统: Ubuntu 22.04.1 LTS with 5.15.0-50-generic Linux Core

+ 域名: 腾讯云 新网域名 Top Level Domain `cloudorz.com`, `cloudorz.cn` 域名解析 dnspod.cn (腾讯云)

### 项目演示:

[用户端](https://music.cloudorz.com/):https://music.cloudorz.com/

[管理端](https://music-backend.cloudorz.com/): https://music-backend.cloudorz.com/

管理员账号: `admin` 密码: `admin`

[数据库phpMyAdmin](https://pma.cloudorz.com/): https://pma.cloudorz.com/

[Docker Portainer Panel](https://portainer.cloudorz.com/): https://portainer.cloudorz.com/


难免有不足之处。项目准备开源 到[自有git服务器](https://git.cloudorz.com) https://git.cloudorz.com，目前正处于部署阶段。敬请期待... Comming Soon...