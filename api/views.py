from django.shortcuts import render
from rest_framework.decorators import api_view

from .models import *
from rest_framework.response import Response

from .serializers import *


@api_view(['GET'])
def get_routes(request):
    routes = [
        {
            'Endpoint': '/users/',
            'method': 'GET, POST',
            'body': None,
            'description': 'Return/Create user'
        },
        {
            'Endpoint': '/users/:id/',
            'method': 'GET',
            'body': None,
            'description': 'Return User About'
        },
        {
            'Endpoint': '/messages/:id/',
            'method': 'GET',
            'body': None,
            'description': 'Return User Messages List'
        },
        {
            'Endpoint': '/messages/:id/:pk/',
            'method': 'GET, POST',
            'body': None,
            'description': 'Return/Create User Chat'
        },
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
def getUsers(request):
    contact = Contact.objects.all()
    serializer = ContactSerial(contact, many=True)

    if request.method == 'GET':
        return Response(serializer.data)


@api_view(['GET'])
def detailUsers(request, pk):
    contact = Contact.objects.get(id=pk)
    serializer = ContactSerial(contact, many=False)

    if request.method == 'GET':
        return Response(serializer.data)


@api_view(['GET'])
def getMessages(request, pk):
    message = Message.objects.filter(contact=pk)
    serializer = MessageSerial(message, many=True)

    if request.method == 'GET':
        return Response(serializer.data)


@api_view(['GET', 'POST'])
def detailMessages(request, pk, o_pk):
    message = Message.objects.filter(contact=pk, other_contact=o_pk)
    serializer = MessageSerial(message, many=True)

    if request.method == 'GET':
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        contact = Contact.objects.get(id=data['contact'])
        other_contact = Contact.objects.get(id=data['other_contact'])
        message = Message.objects.create(
            contact=contact,
            other_contact=other_contact,
            text=data['text'],
            state=data['state']
        )
        serializer = MessageSerial(message, many=False)
        return Response(serializer.data)
