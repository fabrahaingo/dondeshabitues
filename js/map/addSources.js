export function addSources(map) {
  map.addSource('bars', {
    type: 'geojson',
    data: './bars.geojson',
    cluster: true
  })
  map.addSource('restaurants', {
    type: 'geojson',
    data: './restaurants.geojson',
    cluster: true
  })
}
