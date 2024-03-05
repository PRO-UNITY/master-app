import django_filters
from booking.models import Booking

class BookingFilter(django_filters.FilterSet):

    class Meta:
        model = Booking
        fields = {
            'is_active': ['exact'],
            'status': ['exact'],
            'master': ['exact'],
        }
