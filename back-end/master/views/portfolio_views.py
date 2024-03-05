from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from utils.permissions import IsMaster
from utils.renderers import UserRenderers
from utils.pagination import StandardResultsSetPagination
from utils.pagination import Pagination
from utils.expected_fields import check_required_key
from utils.response import success_response, success_created_response, bad_request_response

from master.models import WorkPortfolio, WorkProtfolioImages
from master.serializers.portfolio_serializers import (
    WorkPortfoliosSerializers,
    WorkPortfolioSerializers,
    WorkImagesSerializer,
    WorkImageSerializer,
)


class WorkPortfoliosViews(APIView, Pagination):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsMaster]
    pagination_class = StandardResultsSetPagination
    serializer_class = WorkPortfoliosSerializers

    def get(self, request):
        queryset = WorkPortfolio.objects.all()
        page = super().paginate_queryset(queryset)
        if page is not None:
            serializer = super().get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(queryset, many=True)
        return success_response(serializer.data)

    @swagger_auto_schema(request_body=WorkPortfolioSerializers)
    def post(self, request):
        valid_fields = {'id', 'name', 'description', 'category', 'image', }
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = WorkPortfolioSerializers(data=request.data, context={'owner': request.user})
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_created_response(serializers.data)
        return bad_request_response(serializers.errors)


class WorkPortfolioViews(APIView):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsMaster]

    def get(self, request, pk):
        objects_list = get_object_or_404(WorkPortfolio, id=pk)
        serializers = WorkPortfoliosSerializers(objects_list)
        return success_response(serializers.data)

    @swagger_auto_schema(request_body=WorkPortfoliosSerializers)
    def put(self, request, pk):
        valid_fields = {'id', 'name', 'description', 'category', 'image',}
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = WorkPortfolioSerializers(instance=WorkPortfolio.objects.filter(id=pk)[0], data=request.data, partial=True,)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_response(serializers.data)
        return bad_request_response(serializers.errors)

    def delete(self, request, pk):
        objects_get = WorkPortfolio.objects.get(id=pk)
        objects_get.delete()
        return success_response("delete success")


class WorkImageView(APIView):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsMaster]
    serializer_class = WorkImageSerializer

    def get(self, request, pk):
        objects_list = get_object_or_404(WorkProtfolioImages, id=pk)
        serializers = WorkImagesSerializer(objects_list)
        return success_response(serializers.data)

    @swagger_auto_schema(request_body=WorkImageSerializer)
    def put(self, request, pk):
        valid_fields = {'id', 'image',}
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = WorkImageSerializer(instance=WorkProtfolioImages.objects.filter(id=pk)[0], data=request.data, partial=True,)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_response(serializers.data)
        return bad_request_response(serializers.errors)

    def delete(self, request, pk):
        objects_get = WorkProtfolioImages.objects.get(id=pk)
        objects_get.delete()
        return success_response("delete success")
