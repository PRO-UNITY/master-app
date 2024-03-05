from django.db import models
from authen.models import CustomUser


class Booking(models.Model):
    STATUS = (
        (1, 'Active'),
        (2, 'Accepted'),
        (3, 'Canceled'),
        (4, 'Done')
    )

    status = models.IntegerField(choices=STATUS, default=1)
    title = models.CharField(max_length=250 ,null=True, blank=True)
    master = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True, related_name="master")
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True, related_name="user")
    is_active = models.BooleanField(default=False)
    is_work = models.BooleanField(default=False)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

