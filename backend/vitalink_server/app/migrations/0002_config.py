# Generated by Django 5.1.4 on 2025-02-22 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Config',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.IntegerField()),
                ('gender', models.IntegerField()),
            ],
        ),
    ]
