from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', get_routes),
    path('users/', getUsers, name='get_users'),
    path('users/<str:pk>/', detailUsers, name='detail_users'),
    path('messages/<str:pk>/', getMessages, name='get_messages'),
    path('messages/<str:pk>/<str:o_pk>/', detailMessages, name='detail_messages'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)