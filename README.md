##Restaurant Reviews App

## Project Overview:

This project, I have incrementally converted a static webpage to a mobile-ready web application. In **Stage One**, I have taken a static design that lacked accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use. I have added a service worker which will cache pages as they are accessed.

### Specification

I have been provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also did not include any standard accessibility features, and it did not work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality.

##Instructions

1. Download the project, and in this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, this will allow you to see the live site.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).

##Credits

* Starter code provided by Udacity : https://github.com/udacity/mws-restaurant-stage-1

* Mapbox, an open source mapping platform for custom designed maps.
* Leafletjs, an open-source JS library for mobile-friendly interactive maps

* https://developers.google.com/web/fundamentals/codelabs/offline for guide on the service Worker

* https://matthewcranford.com/ for a wonderful tutorial and guide on how to get started
