const router = new Kakapo.Router();
const db = new Kakapo.Database();
const server = new Kakapo.Server();

db.register('trip', (faker) => {
  return {
    country() {
      return faker.helpers.randomize(['RUS', 'USA', 'ESP', 'DZA', 'LBY']);
    },
    status() {
      return faker.helpers.randomize(['done', 'pending']);
    },
    start_date: '2016-10-10T15:48:56+00:00',
    end_date: '2016-10-16T15:48:56+00:00'
  };
});
db.create('trip', 10);

router.get('/trips', (request, db) => {
  return {
    trips: db.all('trip')
  };
});

server.use(db);
server.use(router);