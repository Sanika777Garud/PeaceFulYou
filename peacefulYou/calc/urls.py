from django.urls import path

from . import views 

urlpatterns=[
    path('',views.home,name='home'),
    path('add',views.add,name="add"),
    path('emotion',views.emotion,name='emotion'),
    path("music",views.music,name='music'),
    path("podcast",views.podcast,name='podcast'),
    path("exercise",views.exercise,name='exercise'),
    path("profile",views.profile,name='profile'),
    path("login",views.login,name='login'),
    path("register",views.register,name='register'),
    
   
]
