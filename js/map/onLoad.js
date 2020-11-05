import { addSources } from './addSources.js'
import { addBarLayers } from './barLayers.js'
import { addRestaurantLayers } from './restaurantLayers.js'

export function onLoad(map) {
  map.on('load', function (e) {
    addSources(map)

    addBarLayers(map)

    addRestaurantLayers(map)
  })
}
