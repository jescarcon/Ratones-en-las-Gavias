from django.contrib import admin

from django.contrib import admin
from .models import *

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('name', 'system', 'genre', 'difficulty', 'status')
    list_filter = ('difficulty', 'status', 'game_mode')
    search_fields = ('name', 'system', 'genre')


@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    list_display = ('name','user')
    list_filter = ('name','user')
    search_fields = ('name','user')