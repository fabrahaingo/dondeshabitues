import { createPopUp } from '../createPopUp.js'
import { flyToPlace } from '../flyToPlace.js'

export function addBarClickEvents(map) {
  // inspect a cluster on click
  map.on('click', 'bar-clusters', function (e) {
    var features = map.queryRenderedFeatures(e.point, {
      layers: ['bar-clusters']
    })
    var clusterId = features[0].properties.cluster_id
    console.log(clusterId)
    map
      .getSource('bars')
      .getClusterExpansionZoom(clusterId, function (err, zoom) {
        if (err) return

        map.easeTo({
          center: features[0].geometry.coordinates,
          zoom: zoom
        })
      })
  })

  map.on('click', function (e) {
    /* Determine if a feature in the "locations" layer exists at that point. */
    let features = map.queryRenderedFeatures(e.point, {
      layers: ['bar']
    })
    console.log(features)
    /* If yes, then: */
    if (features.length) {
      let clickedPoint = features[0]
      /* Fly to the point */
      flyToPlace(clickedPoint, this)
      /* Close all other popups and display popup for clicked store */
      createPopUp(clickedPoint, this)
    }
  })
}
