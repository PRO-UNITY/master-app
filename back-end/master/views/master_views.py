from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from utils.permissions import IsMaster
from utils.renderers import UserRenderers
from utils.expected_fields import check_required_key
from utils.response import success_response, success_created_response, bad_request_response

from master.models import WorkMaster
from master.serializers.master_serializers import (
    WorkMastersSerializers,
    WorkMasterSerializers
)


class WorkMastersViews(APIView):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsMaster]

    def get(self, request):
        queryset = WorkMaster.objects.all()
        serializers = WorkMastersSerializers(queryset, many=True)
        return success_response(serializers.data)

    @swagger_auto_schema(request_body=WorkMasterSerializers)
    def post(self, request):
        valid_fields = {'id', 'name', 'description', 'category', 'price', }
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = WorkMasterSerializers(data=request.data, context={'owner': request.user})
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_created_response(serializers.data)
        return bad_request_response(serializers.errors)


class WorkMasterViews(APIView):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsMaster]

    def get(self, request, pk):
        objects_list = get_object_or_404(WorkMaster, id=pk)
        serializers = WorkMastersSerializers(objects_list)
        return success_response(serializers.data)

    @swagger_auto_schema(request_body=WorkMasterSerializers)
    def put(self, request, pk):
        valid_fields = {'id', 'name', 'description', 'category', 'price',}
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = WorkMasterSerializers(instance=WorkMaster.objects.filter(id=pk)[0], data=request.data, partial=True,)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_response(serializers.data)
        return bad_request_response(serializers.errors)

    def delete(self, request, pk):
        objects_get = WorkMaster.objects.get(id=pk)
        objects_get.delete()
        return success_response("delete success")
