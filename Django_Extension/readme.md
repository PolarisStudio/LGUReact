# Django Extension Lecture

本文内容将以Django实践的方式帮助大家理解服务器程序是怎么运作的。

## 1. 先修条件

1. 基本的Python3的操作
2. 对HTTP有一定的了解：https://baike.baidu.com/item/http/243074?fr=aladdin 

## 2. 包安装

利用 pip install 安装以下的package：

1. pip install django

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

7. 编写第一个hello world Api。我们可以使用function定义一个Api，函数参数为request，我们返回的是一个HttpResponse。

```
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def hello(request):
    return HttpResponse("Hello World")
    
```

8. 为我们的hello配置路径：在myproject/urls中设置路径。

我们首先从myapp.views中import hello函数，然后在urlpatterns中添加一个url路径hello，当有人访问这个路径的时候。我们返回hello函数的结果，也就是hello world！

```
from django.contrib import admin
from django.urls import path
from myapp.views import hello

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello', hello)
]
```

9. 我们重新执行`python manage.py runserver`，在浏览器中访问`http://127.0.0.1:8000/hello`，即可看到Hello World了！也就是说，我们访问这个url，Django解析这个url之后，把它分配给hello函数执行，hello函数随即return了一个HttpResponse("Hello World")。这就是我们的第一个Api。

10. 研究一下request
request并不是没有意义的东西，实际上它是http请求的内容。我们尝试通过print来查看它。

```
def hello(request):
    print(request)
    return HttpResponse("Hello World")
```

当我们直接print的时候，print出来的是`<WSGIRequest: GET '/hello'>`，说明它是一个对象。

```
def hello(request):
    print(dir(request))
    return HttpResponse("Hello World")
```

我们试一下用dir来查看它的所有method和variable。

```
['COOKIES', 'FILES', 'GET', 'META', 'POST', '__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__',
'_encoding', '_get_post', '_get_raw_host', '_get_scheme', '_initialize_handlers', '_load_post_and_files', '_mark_post_parse_error', '_messages', '_post_parse_error', '_read_started', '_set_post', '_stream', '_upload_handlers', 'body', 'build_absolute_uri', 'close', 'content_params', 'content_type',
'csrf_processing_done', 'encoding', 'environ', 'get_full_path', 'get_host', 'get_port', 'get_raw_uri', 'get_signed_cookie', 'is_ajax', 'is_secure', 'method', 'parse_file_upload', 'path', 'path_info',
'read', 'readline', 'readlines', 'resolver_match', 'scheme', 'session', 'upload_handlers', 'user', 'xreadlines']
```

这里有很多的method，大家可以前往Django官网进行研究，我主要介绍一下GET。

GET是一种HTTP的方法，当我们直接在浏览器中访问某个url的时候，method通常都是GET。

```
def hello(request):
    print(request.GET)
    return HttpResponse("Hello World")
```

我们输出一下GET，会得到`<QueryDict: {}>`，这是一个空的dict，因为我们并没有带任何的参数。

11. 做一个简单的计算器

我们在views.py中添加一个新的函数add：

```
def add(request):
    print(request.GET)
    a = float(request.GET['a'])
    b = float(request.GET['b'])
    return HttpResponse(a+b)
```

同时在urls中添加路径add：

```
from django.contrib import admin
from django.urls import path
from myapp.views import hello, add

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello', hello),
    path('add', add)
] 
```

那么，我们就已经添加了一个add的Api。

在add函数中，我们首先是读取了request.GET里面的a和b两个参数，把它们转换成float类型。然后我们返回a+b这个值。

让我们来测试一下吧：在浏览器中输入`http://127.0.0.1:8000/add`，我们会发现报错：`django.utils.datastructures.MultiValueDictKeyError: 'a'`，这是因为我们没有带a的参数导致出错。那么怎么样添加参数呢：在url之后以类似`?a=1.1&b=2`的形式，首先一个问号`?`，然后用等于号赋值，用`&`连接多个参数。让我们来测试一下`http://127.0.0.1:8000/add?a=1.1&b=2`，我们可以看到，它成功返回了3.1。

我们回头看一下Django的输出：
`<QueryDict: {'a': ['1.1'], 'b': ['2']}>`
这说明我们以?&这种方式传进来的参数，都会默认以字符串的形式存放！我们需要进行类型转换。

12. 如何处理出错？使用try！

在我们搭建服务器的时候，我们必须考虑用户输入错误的情况，比如少了a，b的值，我们要给用户一个feedback告诉他他的输入错了，那么，我们可以用try except语句实现。

```
def add(request):
    try:
        print(request.GET)
        a = float(request.GET['a'])
        b = float(request.GET['b'])
        return HttpResponse(a+b)
    except:
        return HttpResponse("Invalid Input")
```

我们再次尝试访问`http://127.0.0.1:8000/add`，这时候，浏览器就会返回Invalid Input了！

至此，我们已经实现了一个简单的计算器Api!


## 5. Django + React

React有多强我在这里就不多说了，在这里我以React配置为例讲解一下静态文件在Django中该如何设置。

首先，我们对React项目执行`npm run build`会得到一个build的文件夹

1. 我们在myproject根目录中新建一个static文件夹，把static中的文件复制过去
2. 我们在myproject根目录中新建一个templates文件夹，把index.html复制过去
3. 修改views.py

```
from django.shortcuts import render, render_to_response

...

def index(request):
    return render_to_response('index.html')
    
```

4. 在urls.py中`from myapp.views import hello, add, index`，并在urlpatterns中添加`path('', index)`
5. 打开settings.py，在最后添加
```
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
```
以及修改TEMPLATES中的DIRS：
```
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        ...
```

6. 此外，对于favicon.ico，manifest.json等文件，也可以复制到static中，但是需要修改index.html，在它的路径前面添加/static/

7. runserver并打开浏览器，我们可以看到根目录下面是我们的react网页了！至此，我们成功部署了静态文件以及html文件。

8. 其实更方便的部署方式是在服务器中分开部署React和Django，Django只需要提供Api访问数据库等，React只负责前端的事情！

## 6. 其他Tips

1. settings.py中的ALLOW_HOSTS可以配置允许访问的IP，如果写'*'， 则全部IP均可访问。
2. 使用POST的时候，把 `'django.middleware.csrf.CsrfViewMiddleware',`注释掉。


