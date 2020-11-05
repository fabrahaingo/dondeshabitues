export function createPopUp(currentFeature, map) {
  let popUps = document.getElementsByClassName('mapboxgl-popup')
  let popHTML = `
    <h3>${currentFeature.properties.name}</h3>
    <h4>${currentFeature.properties.address}</h4>
    <a href="${currentFeature.properties.fundLink}" target="_blank"><b>Donner 1€ ou plus</b></a>
  `
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove()

  new mapboxgl.Popup({ closeOnClick: true })
    .setHTML(popHTML)
    .setLngLat(currentFeature.geometry.coordinates)
    .addTo(map)
}
