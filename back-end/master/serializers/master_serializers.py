from rest_framework import serializers
from master.models import WorkMaster


class WorkMastersSerializers(serializers.ModelSerializer):

    class Meta:
        model = WorkMaster
        fields = ['id', 'name', 'description', 'category', 'owner', 'price', 'create_at']


class WorkMasterSerializers(serializers.ModelSerializer):

    class Meta:
        model = WorkMaster
        fields = ['id', 'name', 'description', 'category', 'owner', 'price', 'create_at']
    

    def create(self, validated_data):
        work = WorkMaster.objects.create(**validated_data)
        work.owner = self.context.get('owner')
        work.save()
        return work

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.category = validated_data.get('category', instance.category)
        instance.price = validated_data.get('price', instance.price)
        instance.save()
        return instance