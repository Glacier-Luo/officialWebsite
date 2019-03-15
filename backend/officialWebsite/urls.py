from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('register', views.register, name='register'),
    path('token-auth', obtain_jwt_token),
    path('csrf-token', views.get_csrf_token), # X-CSRFToken
    path('file-upload', views.FileView.as_view(), name='file-upload'),
    path('image-upload', views.ImageView.as_view(), name='image-upload'),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)