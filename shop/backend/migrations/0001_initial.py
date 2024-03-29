# Generated by Django 5.0 on 2023-12-16 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('category_id', models.AutoField(primary_key=True, serialize=False)),
                ('category_name', models.CharField(blank=True, max_length=255, null=True)),
                ('description', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'db_table': 'categories',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Customers',
            fields=[
                ('customer_id', models.AutoField(primary_key=True, serialize=False)),
                ('customer_name', models.CharField(blank=True, max_length=255, null=True)),
                ('contact_name', models.CharField(blank=True, max_length=255, null=True)),
                ('address', models.CharField(blank=True, max_length=255, null=True)),
                ('city', models.CharField(blank=True, max_length=255, null=True)),
                ('postal_code', models.CharField(blank=True, max_length=255, null=True)),
                ('country', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'db_table': 'customers',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='OrderDetails',
            fields=[
                ('order_detail_id', models.AutoField(primary_key=True, serialize=False)),
                ('order_id', models.IntegerField(blank=True, null=True)),
                ('product_id', models.IntegerField(blank=True, null=True)),
                ('quantity', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'order_details',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('order_id', models.AutoField(primary_key=True, serialize=False)),
                ('customer_id', models.IntegerField(blank=True, null=True)),
                ('order_date', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'orders',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False)),
                ('product_name', models.CharField(blank=True, max_length=255, null=True)),
                ('category_id', models.IntegerField(blank=True, null=True)),
                ('unit', models.CharField(blank=True, max_length=255, null=True)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
            ],
            options={
                'db_table': 'products',
                'managed': False,
            },
        ),
    ]
