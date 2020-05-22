from rest_framework import serializers
from .models import Users, Statuses, Tasks

class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('id','first_name', 'last_name')

class StatusesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Statuses
        fields = ('id','title')

class TasksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tasks
        fields = ('id','title', 'contractor_id', 'status')