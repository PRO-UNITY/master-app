from rest_framework.permissions import BasePermission, IsAuthenticated


class IsAdmin(BasePermission):
    """Rights only for admin"""
    def has_permission(self, request, view):
        return (request.user.is_authenticated and request.user.groups.filter(name='admin').exists() )
    

class IsMaster(BasePermission):
    """Rights only for master"""
    def has_permission(self, request, view):
        return (request.user.is_authenticated and request.user.groups.filter(name='master').exists() )


class IsUser(BasePermission):
    """Rights only for user"""
    def has_permission(self, request, view):
        return (request.user.is_authenticated and request.user.groups.filter(name='user').exists() )
