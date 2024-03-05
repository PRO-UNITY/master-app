from django.urls import path
from booking.views.booking_views import BookingsView, BookingView, BookingAcceptsView, BookingNewView, BookingMasterView

urlpatterns = [
    path('bookings', BookingsView.as_view()),
    path('booking/<int:pk>', BookingView.as_view()),
    path('booking/accepts/<int:pk>', BookingAcceptsView.as_view()),
    path('booking/new', BookingNewView.as_view()),
    path('booking/master', BookingMasterView.as_view()),

]