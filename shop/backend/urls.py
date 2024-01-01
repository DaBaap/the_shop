from django.urls import path, include
from .views import *
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'products', ProductsView, basename='products')
# router.register(r'categories', CategoriesView, basename='categories')
# router.register(r'customers', CustomersView, basename='customers')
# router.register(r'orders', OrdersView, basename='orders')
# router.register(r'order_details', OrderDetailsView, basename='order_details')

urlpatterns = [
    # path('api/', include(router.urls)),
    # path('api/', api_overview, name='api-overview'),

]
