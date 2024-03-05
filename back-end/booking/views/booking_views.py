import django_filters 

from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema

from rest_framework import permissions, generics, filters
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from utils.permissions import IsAdmin, IsUser, IsMaster
from utils.renderers import UserRenderers
from utils.pagination import StandardResultsSetPagination
from utils.pagination import Pagination
from utils.expected_fields import check_required_key
from utils.response import success_response, success_created_response, bad_request_response

from booking.filter import BookingFilter
from booking.models import Booking
from booking.serializers.booking_serializers import BookingsSerliazer, BookingSerliazer


class BookingsView(APIView, Pagination):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsUser]
    pagination_class = StandardResultsSetPagination
    serializer_class = BookingsSerliazer

    def get(self, request):
        queryset = Booking.objects.filter(user=request.user)
        page = super().paginate_queryset(queryset)
        if page is not None:
            serializer = super().get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(queryset, many=True)
        return success_response(serializer.data)

    @swagger_auto_schema(request_body=BookingSerliazer)
    def post(self, request):
        valid_fields = {"title", "master", "status",}
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = BookingSerliazer(data=request.data, context={'user': request.user})
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_created_response(serializers.data)
        return bad_request_response(serializers.errors)


class BookingView(APIView):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsUser]

    def get(self, request, pk):
        objects_list = get_object_or_404(Booking, id=pk)
        serializers = BookingsSerliazer(objects_list)
        return success_response(serializers.data)

    @swagger_auto_schema(request_body=BookingSerliazer)
    def put(self, request, pk):
        valid_fields = {"title", "master", "status",}
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = BookingSerliazer(instance=Booking.objects.filter(id=pk)[0], data=request.data, partial=True,)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_response(serializers.data)
        return bad_request_response(serializers.errors)

    def delete(self, request, pk):
        objects_get = Booking.objects.get(id=pk)
        objects_get.delete()
        return success_response("delete success")


class BookingAcceptsView(APIView):
    render_classes = [UserRenderers]
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdmin]

    @swagger_auto_schema(request_body=BookingSerliazer)
    def patch(sefl, request, pk):
        valid_fields = {"status", "is_active", }
        unexpected_fields = check_required_key(request, valid_fields)
        if unexpected_fields:
            return bad_request_response(f"Unexpected fields: {', '.join(unexpected_fields)}")
        serializers = BookingSerliazer(instance=Booking.objects.filter(id=pk)[0], data=request.data, partial=True,)
        if serializers.is_valid(raise_exception=True):
            serializers.save()
            return success_response(serializers.data)
        return bad_request_response(serializers.errors)


class BookingNewView(generics.ListAPIView):
    queryset = Booking.objects.filter(is_active=False)
    serializer_class = BookingsSerliazer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdmin]

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class BookingMasterView(generics.ListAPIView):
    serializer_class = BookingsSerliazer
    authentication_classes = [JWTAuthentication]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    permission_classes = [IsMaster]
    filterset_class = BookingFilter

    def get_queryset(self):
        return Booking.objects.filter(is_active=True, status=2, master=self.request.user)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class BookingHistoryMasterView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsMaster]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    serializer_class = BookingsSerliazer
    filterset_class = BookingFilter

    def get_queryset(self):
        return Booking.objects.filter(is_active=True, status=4, master=self.request.user)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class BookingHistoryUserView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsUser]
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    serializer_class = BookingsSerliazer
    filterset_class = BookingFilter

    def get_queryset(self):
        return Booking.objects.filter(is_active=True, status=4, user=self.request.user)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
