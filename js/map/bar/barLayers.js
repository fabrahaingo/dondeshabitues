export function addBarLayers(map) {
  map.addLayer({
    id: 'bar-clusters',
    type: 'circle',
    source: 'bars',
    filter: ['has', 'point_count'],
    paint: {
      // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      // with three steps to implement three types of circles:
      //   * Blue, 20px circles when point count is less than 100
      //   * Yellow, 30px circles when point count is between 100 and 750
      //   * Pink, 40px circles when point count is greater than or equal to 750
      'circle-color': '#3344AA',
      'circle-radius': 25
    }
  })

  map.addLayer({
    id: 'bar-cluster-count',
    type: 'symbol',
    source: 'bars',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 13
    },
    paint: {
      'text-color': 'white'
    }
  })

  map.addLayer({
    id: 'bar',
    type: 'symbol',
    source: 'bars',
    filter: ['!', ['has', 'point_count']],
    layout: {
      'icon-image': 'cocktail',
      'icon-size': 0.45
      // 'icon-allow-overlap': true
    }
  })
}
