#use visual studio code for this project

import folium
import os
import json
import urllib.request
endpoint='https://maps.googleapis.com/maps/api/directions/json?'
API_KEY='AIzaSyDbVjEnGw9CHvVgECZoDr8LuL0DGXZYzbo'  #Google Maps Directions API KEY
#https://developers.google.com/maps/documentation/directions/overview

#Other APIs to mess around with
#https://developers.google.com/maps/documentation/javascript/overview
#https://developers.google.com/maps/documentation/javascript/streetview

#below is all cloned from a sample repo so use this as a base to implement basic functionality

# Create map object
m = folium.Map(location=[42.3601, -71.0589], zoom_start=12)

# Global tooltip
tooltip1 = 'Starting Point'
tooltip2 = 'Destination'
# Create custom marker icon
logoIcon = folium.features.CustomIcon('logo.png', icon_size=(50, 50))

# Vega data
vis = os.path.join('data', 'vis.json')

# Geojson Data
overlay = os.path.join('data', 'overlay.json')

# Create markers
folium.Marker([42.363600, -71.099500],
              popup='<strong>Location One</strong>',
              tooltip=tooltip1).add_to(m),
folium.Marker([42.333600, -71.109500],
              popup='<strong>Location Two</strong>',
              tooltip=tooltip2,
              icon=folium.Icon(icon='cloud')).add_to(m),
folium.Marker([42.377120, -71.062400],
              popup='<strong>Location Three</strong>',
              tooltip=tooltip1,
              icon=folium.Icon(color='purple')).add_to(m),
folium.Marker([42.374150, -71.122410],
              popup='<strong>Location Four</strong>',
              tooltip=tooltip2,
              icon=folium.Icon(color='green', icon='leaf')).add_to(m),
folium.Marker([42.375140, -71.032450],
              popup='<strong>Location Five</strong>',
              tooltip=tooltip1,
              icon=logoIcon).add_to(m),
folium.Marker([42.315140, -71.072450],
              popup=folium.Popup(max_width=450).add_child(folium.Vega(json.load(open(vis)), width=450, height=250))).add_to(m)

# Circle marker
folium.CircleMarker(
    location=[42.466470, -70.942110],
    radius=50,
    popup='Sample Circle Marker',
    color='#FFFFFF',
    fill=True,
    fill_color='#FFFFFF'
).add_to(m)

# Geojson overlay
folium.GeoJson(overlay, name='cambridge').add_to(m)

# Generate map
m.save('map.html')
m.save('ultralight-quick-start/assets/app.html')