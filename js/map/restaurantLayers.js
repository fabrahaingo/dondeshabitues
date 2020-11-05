export function addRestaurantLayers(map) {
  map.addLayer({
    id: 'restaurant-clusters',
    type: 'circle',
    source: 'restaurants',
    filter: ['has', 'point_count'],
    paint: {
      // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      // with three steps to implement three types of circles:
      //   * Blue, 20px circles when point count is less than 100
      //   * Yellow, 30px circles when point count is between 100 and 750
      //   * Pink, 40px circles when point count is greater than or equal to 750
      'circle-color': '#ACB3B8',
      'circle-radius': 25
    }
  })

  map.addLayer({
    id: 'restaurant-cluster-count',
    type: 'symbol',
    source: 'restaurants',
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
    id: 'restaurant',
    type: 'symbol',
    source: 'restaurants',
    filter: ['!', ['has', 'point_count']],
    layout: {
      'icon-image': 'restaurant',
      'icon-size': 0.45
      // 'icon-allow-overlap': true
    }
  })
}
