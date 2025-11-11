from django.shortcuts import render

# Create your views here.


def homePage(request):
    return render(request, "home.html")


def aboutPage(request):
    return render(request, "about.html")


def servicesPage(request):
    return render(request, "services.html")


def galleryPage(request):
    return render(request, "gallery.html")


def contactPage(request):
    return render(request, "contact.html")
