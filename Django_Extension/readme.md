# Django Extension Lecture

本文内容将以Django实践的方式帮助大家理解服务器程序是怎么运作的。

## 1. 先修条件

1. 基本的Python3的操作
2. 对HTTP有一定的了解：https://baike.baidu.com/item/http/243074?fr=aladdin 

## 2. 包安装

利用 pip install 安装以下的package：

1. pip install requests
2. pip install django

## 3. 创建一个Django Project

1. 使用Visual Studio Code打开一个文件夹，按Ctrl ~打开终端。
2. 假设我们的Project名为myproject, 那么我们在终端中输入：` django-admin startproject myproject `
3. 我们可以看到这个命令自动生成了一个myproject的文件夹，展开文件夹，可以看到如下的目录结构

```
-myproject
  -myproject
    __init__.py
    settings.py
    urls.py
    wsgi.py
  manage.py
```

4. `cd myproject`, `python manage.py runserver`, 我们就启动了服务器！我们可以看到，django默认打开了 http://127.0.0.1:8000/ 这个端口，我们用浏览器可以打开这个网页。

## 4. 创建一个Django App

一个Django Project下面可以有多个App，每个App处理不同的功能，它们可以共享静态文件。
下面将以myapp为例介绍一个简单的加法Api。

1. 先暂停服务器的运行：在终端中Ctrl C / Command C。
2. 在myproject目录下，我们在终端输入： `python manage.py startapp myapp`，我们会发现自动生成了一个myapp文件夹，目录结构：

```
-myproject
  -myapp
    -migrations
    __init__.py
    admin.py
    apps.py
    models.py
    tests.py
    views.py
  -myproject
    __init__.py
    settings.py
    urls.py
    wsgi.py
  manage.py
  
```
3. 这几个文件都有其特定的功能

  views负责Api
  models负责管理数据库（Django自带了一套SQL Api，当然不嫌麻烦的也可以用其他的package直接连数据库）
  admins是数据库的管理设置（Django自带了一套可视化后台管理系统）
 
4. 在这里我们主要在views.py中编写Api

5. 打开views.py, 会看到以下初始化的代码

```
from django.shortcuts import render

# Create your views here.

```
6. 我们在这里引入package： `from django.http import HttpResponse`

```
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
```






