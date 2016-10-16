// const topojson = require('topojson');
// const d3 = require('d3');
const Datamap = require('datamaps');

module.exports = class Map {
  constructor(options) {
    const defaultOptions = {
      fills: {
        visited: '#afafaf',
        future: '#123456',
        defaultFill: 'green'
      },
      // responsive: true,
      // aspectRatio: 0.4,
      done: this.datamapDone
    };

    this.options = Object.assign({}, defaultOptions, options);
    this.datamap = null;
  }

  render() {
    this.datamap = new Datamap(this.options);

    return this.datamap;
  }

  resize() {
    this.datamap.resize();
  }

  datamapDone(datamap) {
    datamap.svg.selectAll('.datamaps-subunit').on('click', geography => {
      const id = geography.id;
      const name = geography.properties.name;

      console.log(id, name);
    });
  }
};