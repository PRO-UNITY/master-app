from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from utils.permissions import IsAdmin
from utils.renderers import UserRenderers
from utils.pagination import StandardResultsSetPagination
from utils.pagination import Pagination
from utils.expected_fields import check_required_key
from utils.response import success_response, success_created_response, bad_request_response

from master.models import Category
from master.serializers.category_serializers import (
    CategorysSerializer,
    CategorySerializer,
)


class CategorysViews(APIView, Pagination):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdmin]
    pagination_class = StandardResultsSetPagination
    serializer_class = CategorysSerializer

    def get(self, request):
        queryset = Category.objects.all()
        page = super().paginate_queryset(queryset)
        if page is not None:
            serializer = super().get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(queryset, many=True)
        return success_response(serializer.data)

    @swagger_auto_schema(request_body=CategorySerializer)
    def post(self, request):
        valid_fields = {"name",}
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = CategorySerializer(data=request.data)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_created_response(serializers.data)
        return bad_request_response(serializers.errors)


class CategoryView(APIView):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdmin]

    def get(self, request, pk):
        objects_list = get_object_or_404(Category, id=pk)
        serializers = CategorysSerializer(objects_list)
        return success_response(serializers.data)

    @swagger_auto_schema(request_body=CategorySerializer)
    def put(self, request, pk):
        valid_fields = {"name",}
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = CategorySerializer(instance=Category.objects.filter(id=pk)[0], data=request.data, partial=True,)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_response(serializers.data)
        return bad_request_response(serializers.errors)

    def delete(self, request, pk):
        objects_get = Category.objects.get(id=pk)
        objects_get.delete()
        return success_response("delete success")
