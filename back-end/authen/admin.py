from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from authen.models import CustomUser, Comments


class NewMyUser(UserAdmin):
    model = CustomUser
    list_display = ["username", "first_name", "last_name", "id"]
    fieldsets = UserAdmin.fieldsets + ((None, {"fields": ("avatar", "phone",),}),)
    add_fieldsets = UserAdmin.add_fieldsets + ((None, {"fields": ("avatar", "phone",),}),)


admin.site.register(CustomUser, NewMyUser)
admin.site.register(Comments)