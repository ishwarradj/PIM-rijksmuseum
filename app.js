themes = 'themes.json';

const COUNTRIES =
  'countries.geojson';
const COUNTRY_POINTS =
  'countrypoints.geojson';

const INITIAL_VIEW_STATE = {
  latitude: 46.227638,
  longitude: 2.213749,
  zoom: 4,
  bearing: 0,
  pitch: 30
};

const deck = new Deck({
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    new GeoJsonLayer({
      id: 'base_map',
      data: COUNTRIES,
      // Styles
      filled: true,
      lineWidthMinPixels: 2,
      opacity: 0.4,
      getLineColor: [60, 60, 60],
      getFillColor: [200, 200, 255],
    //   pickable: true,
    //   autoHighlight: true,
    //   onClick: info =>
    //     info.object && alert(`${info.object.properties.name} (${info.object.id})`)
    }),

    new GeoJsonLayer({
      id: 'country_points',
      data: COUNTRY_POINTS,
      filled: true,
      status: 0,
      lineWidthMinPixels: 20,
      opacity: 1,
      getLineColor: [200, 255, 200],
      getFillColor: [200, 255, 200],
      pickable: true,
      autoHighlight: true,
      onClick: info =>
        info.object && expandTree(info.object.properties.name),
        status: 1
    })
  ]
});

function expandTree(name) {
  var n = 0;
  var coordinates = 
  for each(var theme in themes[name]) {
    if (n < 3) {

    }

    else(n )
    new GeoJsonLayer ({
      id:
    })
  }
}

function collapseTree(name) {

}

function checkChildren(name) {}

// For automated test cases
/* global document */
document.body.style.margin = '0px';