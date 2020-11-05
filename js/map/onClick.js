import { addPointerStyles } from '../pointerStyles.js'
import { addBarClickEvents } from './barClickEvents.js'
import { addRestaurantClickEvents } from './restaurantClickEvents.js'

export function onClick(map) {
  addPointerStyles(map)

  addRestaurantClickEvents(map)
  addBarClickEvents(map)
}
