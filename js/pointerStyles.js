export function addPointerStyles(map) {
  map.on('mouseenter', 'bar-clusters', function () {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'bar-clusters', function () {
    map.getCanvas().style.cursor = ''
  })
  map.on('mouseenter', 'restaurant-clusters', function () {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'restaurant-clusters', function () {
    map.getCanvas().style.cursor = ''
  })
  map.on('mouseenter', 'bar', function () {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'bar', function () {
    map.getCanvas().style.cursor = ''
  })
  map.on('mouseenter', 'restaurant', function () {
    map.getCanvas().style.cursor = 'pointer'
  })
  map.on('mouseleave', 'restaurant', function () {
    map.getCanvas().style.cursor = ''
  })
}
