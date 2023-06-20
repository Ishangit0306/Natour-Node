const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

//router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
  //.post(tourController.checkBody, tourController.createTour); // we will check via mongoose rather than using this middlewares.


router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);
  
  router.route('/xyz/test').get(tourController.filterTour);

module.exports = router;
