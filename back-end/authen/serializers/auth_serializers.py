from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from rest_framework.exceptions import AuthenticationFailed

from django.core.exceptions import ObjectDoesNotExist, ValidationError
from django.contrib.auth.models import Group
from django.contrib.auth.password_validation import validate_password

from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth import get_user_model

from authen.models import CustomUser
from booking.serializers.comment_serializer import CommentsSerliazer


class UserSignUpSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255, min_length=5, required=True, validators=[UniqueValidator(queryset=CustomUser.objects.all())])
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(validators=[UniqueValidator(queryset=CustomUser.objects.all())])
    role = serializers.CharField(max_length=255, write_only=True)

    class Meta:
        model = CustomUser
        fields = ["id", "username", "first_name", "last_name", "email", "password", "confirm_password", "role"]
        extra_kwargs = {"first_name": {"required": True}, "last_name": {"required": True}}

    def validate_password(self, value):
        try:
            validate_password(value)
        except ValidationError as exc:
            raise serializers.ValidationError(str(exc))
        return value

    def create(self, validated_data):
        if validated_data["password"] != validated_data["confirm_password"]:
            raise serializers.ValidationError({"error": "Those passwords don't match"})
        validated_data.pop("confirm_password")
        role_name = validated_data.pop("role", None)
        if role_name == "admins":
            raise serializers.ValidationError({"error": "You cant to submit this Role"})
        if role_name:
            try:
                role = Group.objects.get(name='user')
            except ObjectDoesNotExist:
                raise serializers.ValidationError({"error": "Invalid role"})
        create = get_user_model().objects.create_user(**validated_data)
        create.groups.add(role)
        return create


class UserUpdateSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(max_length=None, use_url=True)
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    avatar = serializers.ImageField(max_length=None, allow_empty_file=False, allow_null=False, use_url=False, required=False,)
    email = serializers.EmailField(validators=[UniqueValidator(queryset=CustomUser.objects.all())])

    class Meta:
        model = CustomUser
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "avatar",
            "phone",
        ]

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        instance.phone = validated_data.get("phone", instance.phone)
        instance.email = validated_data.get("email", instance.email)
        if instance.avatar == None:
            instance.avatar = self.context.get("avatar")
        else:
            instance.avatar = validated_data.get("avatar", instance.avatar)
        instance.save()
        return instance

class UserSigInSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50, min_length=2)
    password = serializers.CharField(max_length=50, min_length=1)

    class Meta:
        model = CustomUser
        fields = ["username", "password"]
        read_only_fields = ("username",)

    def validate(self, data):
        if self.context.get("request") and self.context["request"].method == "POST":
            allowed_keys = set(self.fields.keys())
            input_keys = set(data.keys())
            extra_keys = input_keys - allowed_keys

            if extra_keys:
                raise serializers.ValidationError(
                    f"Additional keys are not allowed: {', '.join(extra_keys)}"
                )

        return data


class UserInformationSerializer(serializers.ModelSerializer):
    role = serializers.SerializerMethodField()
    avatar = serializers.ImageField(max_length=None, use_url=True)
    masters = CommentsSerliazer(many=True, read_only=True)

    class Meta:
        model = CustomUser
        fields = ["id", "username", "first_name", "last_name", "avatar", "email", "role", "masters", "phone"]

    def get_role(self, obj):
        get_name = [roless.name for roless in obj.groups.all()]
        for k in get_name:
            return k



class MasterAddSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255, min_length=5, required=True, validators=[UniqueValidator(queryset=CustomUser.objects.all())])
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(validators=[UniqueValidator(queryset=CustomUser.objects.all())])


    class Meta:
        model = CustomUser
        fields = ["id", "username", "email", "password", "confirm_password"]
        extra_kwargs = {"first_name": {"required": True}, "last_name": {"required": True}}

    def validate_password(self, value):
        try:
            validate_password(value)
        except ValidationError as exc:
            raise serializers.ValidationError(str(exc))
        return value

    def create(self, validated_data):
        if validated_data["password"] != validated_data["confirm_password"]:
            raise serializers.ValidationError({"error": "Those passwords don't match"})
        validated_data.pop("confirm_password")
        role = Group.objects.get(name='master')
        create = get_user_model().objects.create_user(**validated_data)
        create.groups.add(role)
        return create
