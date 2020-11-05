import { addPointerStyles } from '../pointerStyles.js'
import { addBarClickEvents } from './bar/barClickEvents.js'
import { addRestaurantClickEvents } from './restaurant/restaurantClickEvents.js'

export function onClick(map) {
  addPointerStyles(map)

  addRestaurantClickEvents(map)
  addBarClickEvents(map)
}
