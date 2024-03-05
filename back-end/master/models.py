from django.db import models
from authen.models import CustomUser


class Category(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class WorkPortfolio(models.Model):
    name = models.CharField(max_length=250 ,null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class WorkProtfolioImages(models.Model):
    work = models.ForeignKey(WorkPortfolio, on_delete=models.CASCADE, null=True, blank=True, related_name="images")
    image = models.ImageField(upload_to='work/', null=True, blank=True)



class WorkMaster(models.Model):
    name = models.CharField(max_length=250 ,null=True, blank=True)
    price = models.CharField(max_length=250 ,null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    owner = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.name

