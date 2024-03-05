from rest_framework import serializers
from authen.models import Comments


class CommentsSerliazer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields= ['id', 'title', 'master', 'user', 'create_at']


class CommentSerliazer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields= ['id', 'title', 'master', 'user', 'create_at']

    def create(self, validated_data):
        booking = Comments.objects.create(**validated_data)
        booking.user = self.context.get('user')
        booking.save()
        return booking
    
