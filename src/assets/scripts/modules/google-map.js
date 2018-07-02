import Vue from "vue";

const googleMap = new Vue({
  el: "#google-map-container",
  data: {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let map = new google.maps.Map(document.getElementById("google-map"), {
        center: { lat: 51.7393061, lng: 36.1793134 },
        zoom: 14,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#f2f2f2" }] },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#fff" }]
          },
          { elementType: "labels.text.fill", stylers: [{ color: "#a6a7a8" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a6a7a8" }]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a6a7a8" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a6a7a8" }]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#dcdcdc" }]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fff" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a6a7a8" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#dcdcdc" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fff" }]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a6a7a8" }]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#a6a7a8" }]
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a6a7a8" }]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#5267a8" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#a6a7a8" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#fff" }]
          }
        ]
      });
    }
  },
  template: "#google-map-template"
});
