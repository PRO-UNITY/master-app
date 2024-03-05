from django.urls import path
from authen.views.auth_views import (
    UserSignUp,
    UserSignIn,
    UserProfile,
    MasterAddView,

)

urlpatterns = [
    path('regsiter', UserSignUp.as_view(), name='user register'),
    path('login', UserSignIn.as_view(), name='user login'),
    path('profile', UserProfile.as_view(), name='user profile'),
    path('master/add', MasterAddView.as_view(), name='master create'),

]