# from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
# from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password, check_password
from officialWebsite.models import User
from django.db.utils import IntegrityError
from django.middleware.csrf import get_token
from .models import File
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import FileSerializer, ImageSerializer
# from .forms import FileUploadModelForm
# from .models import UploadFileForm
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
            # return HttpResponse("已有同名用户！")
            return JsonResponse({'desc': 'User already exists！', 'code': 200})
        else:
            # return HttpResponse("注册成功!")
            return JsonResponse({'desc': 'Register success！', 'code': 200})
    else:
        # return HttpResponse("Only allow POST method.")
        return JsonResponse({'desc': 'Only allow POST method！', 'code': 200})

def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'token': token})


class FileView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = FileSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ImageView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        image_serializer = ImageSerializer(data=request.data)
        if image_serializer.is_valid():
            image_serializer.save()
            return Response(image_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# def loginSite(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         print(password)
#         user = authenticate(username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return HttpResponse("Login success!")
#         else:
#             return HttpResponse("Login failed!")
#     else:
#         return HttpResponse("Only allow POST method.")
#
#
# def logoutSite(request):
#     logout(request)
#     return HttpResponseRedirect("/")


# def upload_file(request):


# def loginSite(request):
#     if request.method == 'POST':
#
#     else:
#         return HttpResponse("Only allow POST method.")