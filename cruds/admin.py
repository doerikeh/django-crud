from django.contrib import admin

from .models import Crud

@admin.register(Crud)
class CrudsAdmin(admin.ModelAdmin):
    list_display = ("title",)