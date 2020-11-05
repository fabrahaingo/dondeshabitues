export function onLoad(map) {
  map.on('load', function (e) {
    /* Add the data to your map as a layer */
    map.addLayer({
      id: 'bars',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: './data.geojson'
      },
      layout: {
        'icon-image': 'cocktail',
        'icon-size': 0.35,
        'icon-allow-overlap': true
      }
    })
  })
}
