// const topojson = require('topojson');
// const d3 = require('d3');
const Datamap = require('datamaps');

const map = new Datamap({
  element: document.getElementById('map-container'),
  done(datamap) {
    datamap.svg.selectAll('.datamaps-subunit').on('click', geography => {
      const id = geography.id;
      const name = geography.properties.name;

      console.log(id, name);
    });
  }
  // responsive: true
});

window.addEventListener('resize', () => {
  map.resize();
});