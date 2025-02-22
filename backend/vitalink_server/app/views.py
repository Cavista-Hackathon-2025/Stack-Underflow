from django.http import JsonResponse
from django.shortcuts import render, redirect

# Create your views here.

def getBP(spo2, bpm, temp):
    return 110, 20

def getAlert(spo2, bpm, temp, sbp, dbp):
    return "Drink Water"



def home(request):
    return redirect("/admin")

def push_data(request):
    if request.method == "GET":
        spo2 = request.GET["spo2"]
        bpm = request.GET["bpm"]
        temp = request.GET["temp"]
        sbp, dbp = getBP(spo2, bpm, temp)
        alert = getAlert(spo2, bpm, temp, sbp, dbp)

    return JsonResponse()

def pull_data(request):
    return JsonResponse()