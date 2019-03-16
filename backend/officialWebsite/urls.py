from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index, name='index'),
    path('register', views.register, name='register'),
    path('token-auth', obtain_jwt_token),
    path('csrf-token', views.get_csrf_token),  # X-CSRFToken
    # path('file-upload', views.FileView.as_view(), name='file-upload'),
    # path('image-upload', views.ImageView.as_view(), name='image-upload'),
    path('image-upload', views.upload_image),
    path('image-list', views.load_images),
    path('image-delete', views.delete_image),
    path('file-upload', views.upload_file),
    path('file-delete', views.delete_file),
    path('video-upload', views.upload_video),
    path('video-delete', views.delete_video),
    path('post-article', views.post_article),
    path('article/<int:id>/', views.article),
    path('article-list/<section>/<int:page>/', views.article_list),
    path('article-delete/<int:id>/', views.article_delete)

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)