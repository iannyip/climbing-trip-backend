// db is an argument to this function so
// that we can make db queries inside
export default function initRoutesController(db) {
  const index = (req, res) => {
    const { tripId } = req.params;
    db.Route.findAll({
      where: {
        tripId,
      },
    })
      .then((routes) => {
        res.send({ routes });
      })
      .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
