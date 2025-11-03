const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    res.json(Tour.getAll());
};

const createTour = (req, res) => {
    const body = req.body 
    console.log(body)
    res.json(Tour.addOne(body.name, body.info, body.image, body.price));
};

const getTourById = (req, res) => {
    const id = req.params.tourId;
    res.json(Tour.findById(id));
};

const updateTour = (req, res) => {
    const id = req.params.tourId;
    const body = req.body;
    console.log(body)
    res.json(Tour.updateOneById(id,body));
};

const deleteTour = (req, res) => {
    const id = req.params.tourId;
    res.json(Tour.deleteOneById(id));
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};