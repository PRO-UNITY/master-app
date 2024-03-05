from rest_framework import serializers
from master.models import WorkPortfolio, WorkProtfolioImages


class WorkImagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkProtfolioImages
        fields = ['id', 'work', 'image']


class WorkImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, allow_empty_file=False, allow_null=False, use_url=False, required=False,)

    class Meta:
        model = WorkProtfolioImages
        fields = ['id', 'work', 'image']
    
    def update(self, instance, validated_data):
        if instance.image == None:
            instance.image = self.context.get("image")
        else:
            instance.image = validated_data.get("image", instance.image)
        instance.save()
        return instance



class WorkPortfoliosSerializers(serializers.ModelSerializer):
    images = WorkImagesSerializer(many=True, read_only=True)

    class Meta:
        model = WorkPortfolio
        fields = ['id', 'name', 'description', 'category', 'owner', 'images', 'create_at']


class WorkPortfolioSerializers(serializers.ModelSerializer):
    image = serializers.ListField(
        child=serializers.ImageField(max_length=1000000, allow_empty_file=False, use_url=False), write_only=True,)

    class Meta:
        model = WorkPortfolio
        fields = ['id', 'name', 'description', 'category', 'owner', 'create_at', 'image']
    

    def create(self, validated_data):
        image = validated_data.pop("image")
        work = WorkPortfolio.objects.create(**validated_data)
        work.owner = self.context.get('owner')
        for item in image:
            images = WorkProtfolioImages.objects.create(work=work, image=item)
            images.save()
        return work

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.category = validated_data.get('category', instance.category)
        instance.save()
        return instance