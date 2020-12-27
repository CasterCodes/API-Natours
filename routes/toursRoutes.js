import express from 'express'; 
import {getSingleTour, getAllTours, createTour, deleteTour, updateTour,checkTour} 
from '../controllers/toursController.js';

const Router = express.Router();

Router.param('id', checkTour)

Router.route('/').get(getAllTours).post(createTour);

Router.route("/:id").patch(updateTour).get(getSingleTour).delete(deleteTour)

export default Router;