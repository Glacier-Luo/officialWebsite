from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password, check_password
from officialWebsite.models import User
from django.db.utils import IntegrityError
# Create your views here.


def index(request):
    return HttpResponse("index")


def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = make_password(request.POST.get('password'))
        # password = request.POST.get('password')
        user = User()
        user.username = username
        user.password = password
        try:
            user.save()
        except IntegrityError:
            return HttpResponse("已有同名用户！")
        else:
            return HttpResponse("注册成功!")
    else:
        return HttpResponse("Only allow POST method.")


def loginSite(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(password)
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return HttpResponse("Login success!")
        else:
            return HttpResponse("Login failed!")
    else:
        return HttpResponse("Only allow POST method.")


def logoutSite(request):
    logout(request)
    return HttpResponseRedirect("/")

# def loginSite(request):
#     if request.method == 'POST':
#
#     else:
#         return HttpResponse("Only allow POST method.")