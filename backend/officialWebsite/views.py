# from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
# from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password, check_password
from officialWebsite.models import User, Article, Description
from django.db.utils import IntegrityError
from django.middleware.csrf import get_token
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import FileSerializer, ImageSerializer
from .froala_editor import File, Image, Video
from .froala_editor import DjangoAdapter
import json
import sys
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core.paginator import Paginator
from rest_framework.response import Response
from django.conf import settings
# from .forms import FileUploadModelForm
# from .models import UploadFileForm
# Create your views here.

@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def index(request):
    return HttpResponse("index")


def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = make_password(request.POST.get('password'))
        user = User()
        user.username = username
        user.password = password
        try:
            user.save()
        except IntegrityError:
            return JsonResponse({'desc': 'User already exists！', 'code': 200})
        else:
            return JsonResponse({'desc': 'Register success！', 'code': 200})
    else:
        return JsonResponse({'desc': 'Only allow POST method！', 'code': 200})

def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'token': token})


# class FileView(APIView):
#     parser_classes = (MultiPartParser, FormParser)
#
#     def post(self, request, *args, **kwargs):
#         file_serializer = FileSerializer(data=request.data)
#         if file_serializer.is_valid():
#             file_serializer.save()
#             return Response(file_serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#
# class ImageView(APIView):
#     parser_classes = (MultiPartParser, FormParser)
#
#     def post(self, request, *args, **kwargs):
#         image_serializer = ImageSerializer(data=request.data)
#         if image_serializer.is_valid():
#             image_serializer.save()
#             return Response(image_serializer.data, status=status.HTTP_201_CREATED)
#         else:
#             return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def upload_image(request):
    try:
        response = Image.upload(DjangoAdapter(request), '/public/image/')
    except Exception:
        response = {'error': str(sys.exc_info()[1])}
    return HttpResponse(json.dumps(response), content_type="application/json")


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def load_images(request):
  try:
    response = Image.list('/public/image/')
  except Exception:
    response = {'error': str(sys.exc_info()[1])}
  return HttpResponse(json.dumps(response), content_type="application/json")


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def delete_image(request):
  src = request.POST.get('src', '')
  try:
    Image.delete(src)
    return HttpResponse('ok', content_type="application/json")
  except:
    raise Exception('Could not delete image')


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def upload_file(request):
    options = {
        'validation': None
    }
    try:
        response = File.upload(DjangoAdapter(request), '/public/file/', options)
    except Exception:
        response = {'error': str(sys.exc_info()[1])}
    return HttpResponse(json.dumps(response), content_type="application/json")


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def delete_file(request):
  src = request.POST.get('src', '')
  try:
    File.delete(src)
    return HttpResponse('ok', content_type="application/json")
  except:
    raise Exception('Could not delete file')


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def upload_video(request):
    options = {
        'validation': None
    }
    try:
        response = Video.upload(DjangoAdapter(request), '/public/video/', options)
    except Exception:
        response = {'error': str(sys.exc_info()[1])}
    return HttpResponse(json.dumps(response), content_type="application/json")


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def delete_video(request):
  src = request.POST.get('src', '')
  try:
    File.delete(src)
    return HttpResponse('ok', content_type="application/json")
  except:
    raise Exception('Could not delete file')


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def post_article(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        body = request.POST.get('body')
        section = request.POST.get('section')
        article = Article()
        article.title = title
        article.body = body
        article.section = section
        try:
            article.save()
        except IntegrityError:
            return JsonResponse({'desc': 'User already exists！', 'code': 200})
        else:
            return JsonResponse({'desc': 'Post success！', 'code': 200})
    else:
        return JsonResponse({'desc': 'Only allow POST method！', 'code': 200})


def article(request, id):
    try:
        article = Article.objects.get(id=id)
    except BaseException:
        return JsonResponse({'desc': 'Unkonw error！', 'code': 200})
    context = {'id':article.id, 'title': article.title, 'body': article.body, 'section': article.section, 'created': article.created, 'updated': article.updated}
    return JsonResponse(context)


def article_list(request, section, page):
    articles = Article.objects.filter(section=section)
    pages = Paginator(articles, 10)
    data = pages.page(page)
    context = []
    for i in data:
        context.append({'id':i.id, 'title': i.title, 'section': i.section, 'created': i.created, 'updated': i.updated})
    return JsonResponse(context, safe=False)


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def article_delete(request, id):
    article = Article.objects.get(id=id)
    try:
        article.delete()
    except BaseException:
        return JsonResponse({'desc': 'Unkonw error！', 'code': 200})
    return JsonResponse({'desc': 'Delete success！', 'code': 200})


@api_view(['GET', 'POST'])
@permission_classes((IsAuthenticated, ))
def change_desc(request):
    desc = Description.objects.first()
    data = request.POST.get('body')
    if data is '':
        return JsonResponse({'desc': 'Body is None！', 'code': 200})
    if desc is None:
        new = Description()
        new.body = data
        new.save()
    else:
        desc.body = data
        desc.save()
    return JsonResponse({'desc': 'Change success！', 'code': 200})


def get_desc(request):
    desc = Description.objects.first()
    if desc is None:
        return JsonResponse({'desc': 'Desc is None！', 'code': 200})
    else:
        return JsonResponse({'body': desc.body, 'code': 200})