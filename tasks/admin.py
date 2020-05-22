# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import *

admin.site.register(Users)
admin.site.register(Statuses)
admin.site.register(Tasks)

# Register your models here.
