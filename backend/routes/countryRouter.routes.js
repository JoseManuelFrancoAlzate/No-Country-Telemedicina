import express from 'express'
import { ClassCountriesController } from '../controllers/countries.controller.js'

const countryRouter = express.Router()

countryRouter.route('/')
  .get(ClassCountriesController.get)
  


export { countryRouter }
