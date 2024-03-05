from rest_framework import serializers
from booking.models import Booking


class BookingsSerliazer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields= ['id', 'title', 'master', 'user', 'is_active', 'is_work', 'status', 'create_at']


class BookingSerliazer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields= ['id', 'title', 'master', 'user', 'is_active', 'is_work', 'status']

    def create(self, validated_data):
        booking = Booking.objects.create(**validated_data)
        booking.user = self.context.get('user')
        booking.save()
        return booking
    

