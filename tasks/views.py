# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import *
from .serializers import *


def temp(request):
    return render(request, 'tasks/temp.html', {})


# users

@api_view(['GET', 'POST'])
def users_list(request):

    if request.method=='GET':
        data=[]
        nextPage=1
        previousPage=1
        users = Users.objects.all()
        page=request.GET.get('page',1)
        paginator=Paginator(users,10)
        try:
            data=paginator.page(page)
        except PageNotAnInteger:
            data=paginator.page(1)
        except EmptyPage:
            data=paginator.page(paginator_num.pages)

        serializer = UsersSerializer(data,context={
            'request':request}, many=True)
        if data.has_next():
            nextPage=data.next_page_number()
        if data.has_previous():
            previousPage=data.previous_page_number()

        return Response({'data':serializer.data, 'count':paginator.count,
            'numpages':paginator.num_pages, 'nextlink': 'api/users/?page='+str(nextPage),
            'prevlink': '/api/users/?page=' + str(previousPage)})

    elif request.method=='POST':
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def users_detail(request,pk):
    try:
        user=Users.objects.get(pk=pk)
    except Users.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer=UsersSerializer(user, context={'request':request})
        return Response(serializer.data)

    elif request.method=='PUT':
        serializer = UsersSerializer(user, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#status

@api_view(['GET', 'POST'])
def statuses_list(request):

    if request.method=='GET':
        data=[]
        nextPage=1
        previousPage=1
        statuses = Statuses.objects.all()
        page=request.GET.get('page',1)
        paginator=Paginator(statuses,10)
        try:
            data=paginator.page(page)
        except PageNotAnInteger:
            data=paginator.page(1)
        except EmptyPage:
            data=paginator.page(paginator_num.pages)

        serializer = StatusesSerializer(data,context={
            'request':request}, many=True)
        if data.has_next():
            nextPage=data.next_page_number()
        if data.has_previous():
            previousPage=data.previous_page_number()

        return Response({'data':serializer.data, 'count':paginator.count,
            'numpages':paginator.num_pages, 'nextlink': 'api/statuses/?page='+str(nextPage),
            'prevlink': '/api/statuses/?page=' + str(previousPage)})

    elif request.method=='POST':
        serializer = StatusesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def statuses_detail(request,pk):
    try:
        status=Statuses.objects.get(pk=pk)
    except Statuses.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer=StatusesSerializer(user, context={'request':request})
        return Response(serializer.data)

    elif request.method=='PUT':
        serializer = StatusesSerializer(user, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        status.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#tasks

@api_view(['GET', 'POST'])
def tasks_list(request):

    if request.method=='GET':
        data=[]
        nextPage=1
        previousPage=1
        tasks = Tasks.objects.all()
        page=request.GET.get('page',1)
        paginator=Paginator(tasks,10)
        try:
            data=paginator.page(page)
        except PageNotAnInteger:
            data=paginator.page(1)
        except EmptyPage:
            data=paginator.page(paginator_num.pages)

        serializer = TasksSerializer(data,context={
            'request':request}, many=True)
        if data.has_next():
            nextPage=data.next_page_number()
        if data.has_previous():
            previousPage=data.previous_page_number()

        return Response({'data':serializer.data, 'count':paginator.count,
            'numpages':paginator.num_pages, 'nextlink': 'api/tasks/?page='+str(nextPage),
            'prevlink': '/api/tasks/?page=' + str(previousPage)})

    elif request.method=='POST':
        serializer = TasksSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def tasks_detail(request,pk):
    try:
        tasks=Tasks.objects.get(pk=pk)
    except Tasks.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer=TasksSerializer(user, context={'request':request})
        return Response(serializer.data)

    elif request.method=='PUT':
        serializer = TasksSerializer(user, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)