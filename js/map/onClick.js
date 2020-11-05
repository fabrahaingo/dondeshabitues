import { createPopUp } from '../createPopUp.js'
import { flyToBar } from '../flyToBar.js'

export function onClick(map) {
  map.on('click', function (e) {
    /* Determine if a feature in the "locations" layer exists at that point. */
    let features = map.queryRenderedFeatures(e.point, {
      layers: ['bars']
    })
    /* If yes, then: */
    if (features.length) {
      let clickedPoint = features[0]
      /* Fly to the point */
      flyToBar(clickedPoint, this)
      /* Close all other popups and display popup for clicked store */
      createPopUp(clickedPoint, this)
    }
  })
}
