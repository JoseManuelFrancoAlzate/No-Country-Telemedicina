import { Router } from 'express';
import { ClassDoctorsController } from '../controllers/doctors.controller.js';

const doctorRouter = Router();

// Obtener todos los médicos
doctorRouter.get('/', ClassDoctorsController.get);// getAllDoctors

// Obtener un médico por su DNI
doctorRouter.get('/dni', ClassDoctorsController.get); //getDoctorByDni

// Crear un nuevo médico
doctorRouter.post('/', ClassDoctorsController.post);

// Eliminar un médico por su DNI
doctorRouter.delete('/', ClassDoctorsController.delete);

//Para modificar por dni:
//doctorRouter.put('/dni', ClassDoctorsController.put); //getDoctorByDni

export {doctorRouter};