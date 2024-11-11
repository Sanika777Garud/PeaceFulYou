from django.shortcuts import render,redirect
from django.contrib import messages
from django.contrib.auth.models import User,auth
from django.contrib.auth.decorators import login_required

# Create your views here.
def login(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('/')
        else :
            messages.info(request,'Wrong Password')
            return render(request,'profile.html')
    else :
        return render(request,'profile.html')

@login_required
def account(request,username):
    try:
        user = User.objects.get(username=username)
        # Now you can use the 'user' object to access user-specific data.
    except User.DoesNotExist:
        # Handle the case where the user doesn't exist, e.g., show an error page.
        pass
    return render(request, 'account.html', {'user': user})


def register(request):
    if request.method=='POST':
        first_name=request.POST['first_name']
        last_name=request.POST['last_name']
        username=request.POST['username']
        password1=request.POST['password1']
        password2=request.POST['password2']
        email=request.POST['email']

        if password1==password2:
            if User.objects.filter(username=username).exists():
                # print('Username is already taken')
                messages.info(request,'Username already taken')
                return render(request,'profile.html')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email is already taken')
                # print('Email is already taken')
                return render(request,'profile.html')
            else :
                user=User.objects.create_user(username=username,password=password1,email=email,first_name=first_name,last_name=last_name)
                user.save();    
                print('user created')
                return render(request,'profile.html')
        else :
            messages.info(request,'password not matching...')
            return render(request,'profile.html')
            # print('password not matching...')
        return redirect('/')
    else :
        return render(request,'profile.html')

def logout(request):
    auth.logout(request)
    return redirect('/')