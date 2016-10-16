require('./kakapo-config');

const Map = require('./map');
const fillKeyForStatus = status => {
  return {
    done: 'visited',
    pending: 'future'
  }[status];
};
const initializeMap = () => {
  fetch('/trips').then(r => r.json()).then(response => {
    const data = response.trips.reduce((prev, current) => {
      if (!prev[current.country]) {
        prev[current.country] = {
          fillKey: fillKeyForStatus(current.status)
        };
      }

      return prev;
    }, {});

    const map = new Map({
      element: document.getElementById('map-container'),
      data
    });

    map.render();
  });
};

initializeMap();

// window.addEventListener('resize', () => {
//   map.resize();
// });