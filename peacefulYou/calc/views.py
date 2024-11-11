from django.shortcuts import render,redirect
from django.urls import path 
from . import views 
from django.contrib.auth.models import User,auth
from django.http import HttpResponse
# Create your views here.

from keras.models import load_model
from time import sleep
from keras.preprocessing.image import img_to_array
from keras.preprocessing import image
import cv2
import numpy as np
import matplotlib.pyplot as plt
def home(request):
    return render(request, 'index2.html')


def music(request):
    return render(request,'music1.html')

def podcast(request):
    return render(request,'music1.html')

def exercise(request):
    return render(request,'exercise.html')

def profile(request):
    return render(request,'profile.html')


def login(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        user=auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('/')
        else :
            messages.info(request,'invalid credentials')
            return redirect('profile')
    else :
        return render(request,'profile.html')

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
                return redirect('profile')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email is already taken')
                # print('Email is already taken')
                return redirect('profile')
            else :
                user=User.objects.create_user(username=username,password=password1,email=email,first_name=first_name,last_name=last_name)
                user.save();    
                print('user created')
                return render(request,'profile.html')
        else :
            messages.info(request,'password not matching...')
            return redirect('profile')
            # print('password not matching...')
        return redirect('/')
    else :
        return render(request,'profile.html')

def add(request):
    val1=int(request.POST['num1'])
    val2=int(request.POST['num2'])
    res=val1+val2
    return render(request ,'result.html',{'result':res})  #res is a variable which stores thr value with name result

def emotion(request):
    face_classifier = cv2.CascadeClassifier('haar_face.xml')
    classifier =load_model('Emotion_Detection.h5')

    emotion_labels = ['Angry','Happy','Neutral','Sad', 'Surprise']

    cap = cv2.VideoCapture(0)
    # return render(request, 'webcam.html')

    while True:
        flg, frame = cap.read()
        labels = []
        gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
        faces = face_classifier.detectMultiScale(gray)

        for (x,y,w,h) in faces:
            # cv2.rectangle(frame,(x,y),(x+w,y+h),(0,255,255),2)
            roi_gray = gray[y:y+h,x:x+w]
            roi_gray = cv2.resize(roi_gray,(48,48),interpolation=cv2.INTER_AREA)

            if np.sum([roi_gray])!=0:
                roi = roi_gray.astype('float')/255.0
                roi = img_to_array(roi)
                roi = np.expand_dims(roi,axis=0)

                prediction = classifier.predict(roi)[0]
                label=emotion_labels[prediction.argmax()]
                label_position = (x,y)
                qpos=(30,30)
                qstr="press 'Q' to stop camera"
                # cv2.putText(frame,label,label_position,cv2.FONT_HERSHEY_SIMPLEX,1,(0,255,0),2)
                cv2.putText(frame,qstr,qpos,cv2.FONT_HERSHEY_SIMPLEX,1,(255,255,255),2)
            else:
                cv2.putText(frame,'No Faces',(30,80),cv2.FONT_HERSHEY_SIMPLEX,1,(0,255,0),2)
        cv2.imshow('Emotion Detector',frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()
    str="You are looking "+label
    return render(request ,'index2.html',{'emotion':str})
    # return render(request,'index2.html')


