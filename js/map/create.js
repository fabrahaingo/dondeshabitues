export function createMap() {
  if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this)
      }
    }
  }
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZmFicmFoYWluZ28iLCJhIjoiY2p6ZW8yajJkMDQ1eDNkandqaWwwc2I1MSJ9.gWlzrTf287niD3KIHSdM2g'
  let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/fabrahaingo/ckh3ogalz03rq19lkpimn3ebr', //stylesheet location
    center: [2.3522, 48.8566], // starting position
    zoom: 11.5 // starting zoom
  })

  map.addControl(new mapboxgl.NavigationControl())
  map.addControl(new mapboxgl.FullscreenControl())

  return map
}
