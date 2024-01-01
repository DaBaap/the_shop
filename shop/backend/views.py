# from django.shortcuts import render
# from django.urls import reverse
from .models import *
from .serializer import *
from rest_framework.response import Response
# from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from django.core.cache import cache
from django.core import serializers  # Django's serializers
import json
# create a function for the home page
    
class CategoriesView(ModelViewSet):
    cached: bool = True

    queryset = cache.get('categories_data_object')
    if queryset is None:
        queryset = Categories.objects.all()
        serializer_class  = CategoriesSerializer
        cached = False

    def list(self, request):
        cache_key = 'categories_data'
        cache_time = 86400  
        if not self.cached:
            data = self.get_serializer(self.queryset, many=True).data
            data_json = serializers.serialize('json', self.queryset)
            cache.set(cache_key+'_object', data, timeout=cache_time)
            cache.set(cache_key+'_json', data_json, timeout=cache_time)
        else:
            data = self.queryset
        return Response(data)
            
class ProductsView(ModelViewSet):
    cached: bool = True

    queryset = cache.get('products_data_object')
    if queryset is None:
        queryset = Products.objects.all()
        serializer_class  = ProductsSerializer
        cached = False

    def list(self, request):
        cache_key = 'products_data'
        cache_time = 86400  
        if not self.cached:
            data = self.get_serializer(self.queryset, many=True).data
            data_json = serializers.serialize('json', self.queryset)
            cache.set(cache_key+'_object', data, timeout=cache_time)
            cache.set(cache_key+'_json', data_json, timeout=cache_time)
        else:
            data = self.queryset
        return Response(data)

class CustomersView(ModelViewSet):
    cached: bool = True

    queryset = cache.get('customers_data_object')
    if queryset is None:
        queryset = Customers.objects.all()
        serializer_class  = CustomersSerializer
        cached = False

    def list(self, request):
        cache_key = 'customers_data'
        cache_time = 86400  
        if not self.cached:
            data = self.get_serializer(self.queryset, many=True).data
            data_json = serializers.serialize('json', self.queryset)
            cache.set(cache_key+'_object', data, timeout=cache_time)
            cache.set(cache_key+'_json', data_json, timeout=cache_time)
        else:
            data = self.queryset
        return Response(data)

class OrdersView(ModelViewSet):
    cached: bool = True

    queryset = cache.get('orders_data_object')
    if queryset is None:
        queryset = Orders.objects.all()
        serializer_class  = OrdersSerializer
        cached = False

    def list(self, request):
        cache_key = 'orders_data'
        cache_time = 86400  
        if not self.cached:
            data = self.get_serializer(self.queryset, many=True).data
            data_json = serializers.serialize('json', self.queryset)
            cache.set(cache_key+'_object', data, timeout=cache_time)
            cache.set(cache_key+'_json', data_json, timeout=cache_time)
        else:
            data = self.queryset
        return Response(data)
    
class OrderDetailsView(ModelViewSet):
    cached: bool = True

    queryset = cache.get('orderdetails_data_object')
    if queryset is None:
        queryset = OrderDetails.objects.all()
        serializer_class  = OrderDetailsSerializer
        cached = False

    def list(self, request):
        cache_key = 'orderdetails_data'
        cache_time = 86400  
        if not self.cached:
            data = self.get_serializer(self.queryset, many=True).data
            data_json = serializers.serialize('json', self.queryset)
            cache.set(cache_key+'_object', data, timeout=cache_time)
            cache.set(cache_key+'_json', data_json, timeout=cache_time)
        else:
            data = self.queryset
        return Response(data)
    
