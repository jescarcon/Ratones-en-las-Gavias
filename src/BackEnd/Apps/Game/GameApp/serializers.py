from rest_framework import serializers
from .models import *

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id','name','system','genre','duration','difficulty','players','game_mode','location','status' ,'user']

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['id','name','user']
