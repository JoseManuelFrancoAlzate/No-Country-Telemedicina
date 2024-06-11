import express from 'express'
import { ClassMedicalRecordsController } from '../controllers/medicalRecods.controller.js'

const medicalRecordRouter = express.Router()

medicalRecordRouter.route('/')
  .get(ClassMedicalRecordsController.get)
  
  .post(ClassMedicalRecordsController.post)
  .put(ClassMedicalRecordsController.put)




export { medicalRecordRouter }