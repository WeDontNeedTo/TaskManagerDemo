"""taskmanager URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from tasks import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.temp),
    url(r'^api/users/$', views.users_list),
    url(r'^api/users/(?P<pk>[0-9]+)$', views.users_detail),
    url(r'^api/statuses/$', views.statuses_list),
    url(r'^api/statuses/(?P<pk>[0-9]+)$', views.statuses_detail),
    url(r'^api/tasks/$', views.tasks_list),
    url(r'^api/tasks/(?P<pk>[0-9]+)$', views.tasks_detail)
]
