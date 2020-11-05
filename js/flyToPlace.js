export function flyToPlace(currentFeature, map) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 14
  })
}
