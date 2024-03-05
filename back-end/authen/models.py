from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+9989999999'. Up to 15 digits allowed.")
    phone = models.CharField(validators=[phone_regex], max_length=250, null=True, blank=True)
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)

    class Meta:
        db_table = "user_table"



class Comments(models.Model):
    title = models.CharField(max_length=250 ,null=True, blank=True)
    master = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True, related_name="masters")
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True, related_name="users")
    create_at = models.DateTimeField(auto_now_add=True)
