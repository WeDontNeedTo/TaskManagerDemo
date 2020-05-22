# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible



from django.db import models

# Create your models here.
@python_2_unicode_compatible
class Users(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)

    def __str__(self):
        return "%s %s %s" % (self.id, self.first_name, self.last_name)
    
@python_2_unicode_compatible
class Statuses(models.Model):
    title=models.CharField(max_length=50)

    def __str__(self):
        return "%s %s" % (self.id, self.title)
    
@python_2_unicode_compatible
class Tasks(models.Model):
    title=models.CharField(max_length=200)
    contractor_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    status=models.ForeignKey(Statuses, on_delete=models.CASCADE)

    def __str__(self):
        return "%s %s" % (self.id, self.title)
    

