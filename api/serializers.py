from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import *


class ContactSerial(ModelSerializer):

    class Meta:
        model = Contact
        fields = "__all__"


class MessageSerial(ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"
        depth = 1
