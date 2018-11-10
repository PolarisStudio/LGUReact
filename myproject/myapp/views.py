from django.shortcuts import render, render_to_response
from django.http import HttpResponse

# Create your views here.

def hello(request):
    print(request.GET)
    return HttpResponse("Hello World")

def add(request):
    try:
        print(request.GET)
        a = float(request.GET['a'])
        b = float(request.GET['b'])
        return HttpResponse(a+b)
    except:
        return HttpResponse("Invalid Input")

def index(request):
    return render_to_response('index.html')