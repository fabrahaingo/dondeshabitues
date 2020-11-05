import { addSources } from './addSources.js'
import { addBarLayers } from './bar/barLayers.js'
import { addRestaurantLayers } from './restaurant/restaurantLayers.js'

export function onLoad(map) {
  map.on('load', function (e) {
    addSources(map)

    addBarLayers(map)

    addRestaurantLayers(map)
  })
}
