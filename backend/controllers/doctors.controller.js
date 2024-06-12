import { client } from '../db.js';
import { ClassDoctorModel } from '../models/doctors.model.js';
import { validatePostDoctor, validatePutDoctor } from '../utils/validators/doctorsValidator.js'; // Asegúrate de crear el validador correspondiente

class DoctorsController {
  /**
   * Función encargada de obtener todos los médicos
   *
   * @param {{}} req - Se refiere a los parámetros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envía el servidor
   * @returns {Promise}
   */
  async get(req, res) {
    const { dni, email } = req.query;

    try {
      if (dni) {
        const response = await client.query(ClassDoctorModel.getDoctorByDni, [dni]);
        if (!response.rows.length) {
          return res.status(404).json({ message: 'Doctor Not Found' });
        } else {
          return res.status(200).json(response.rows[0]);
        }
      } else if (email) {
        const response = await client.query(ClassDoctorModel.getDoctorByEmail, [email]);
        if (!response.rows.length) {
          return res.status(404).json({ message: 'Doctor Not Found' });
        } else {
          return res.status(200).json(response.rows[0]);
        }
      } else {
        const response = await client.query(ClassDoctorModel.getAllDoctors);
        return res.status(200).json(response.rows);
      }
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  }

  /**
   * Función encargada de guardar médicos en la base de datos
   *
   * @param {{}} req - Se refiere a los parámetros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envía el servidor
   * @returns {Promise}
   */
  async post(req, res) {
    const result = validatePostDoctor(req.body);

    if (result.error) {
      return res.status(500).json(result.error.issues);
    }

    const {
      licenceNumber,
      identification_number,
      name,
      lastName,
      phoneNumber,
      email,
      active,
      licencePhoto,
      profilePicture,
      birthDate,
      biography,
      speciality
    } = result.data;

    try {
      await client.query(
        ClassDoctorModel.postDoctor, [
          licenceNumber,
          identification_number,
          name,
          lastName,
          phoneNumber,
          email,
          active,
          licencePhoto,
          profilePicture,
          birthDate,
          biography,
          speciality
        ]);

      return res.status(200).json(result.data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  /**
   * Función encargada de eliminar un médico
   *
   * requiere un dni o un email proveniente de query
   *
   * @param {{}} req - Se refiere a los parámetros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envía el servidor
   * @returns {Promise}
   */
  async delete(req, res) {
    const { dni, email } = req.query;

    try {
      if (dni && email) {
        return res.status(406).json({ message: 'Provide just an Email OR a DNI' });
      } else if (dni) {
        await client.query(ClassDoctorModel.deleteDoctorByDni, [dni]);
        return res.status(200).json({ message: 'Doctor Deleted Successfully' });
      } else if (email) {
        await client.query(ClassDoctorModel.deleteDoctorByEmail, [email]);
        return res.status(200).json({ message: 'Doctor Deleted Successfully' });
      } else {
        return res.status(500).json({ error: 'Must provide an Email or a DNI' });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async put(req, res) {
    const result = validatePutDoctor(req.body);
    console.log(result.data)

    if (result.error) {
      return res.status(400).json(result.error.issues);
    }

    try {
      const {
        id,
        licenceNumber,
        identification_number,
        name,
        lastName,
        phoneNumber,
        active,
        licencePhoto,
        profilePicture,
        birthDate,
        biography,
        specialty_id
      } = result.data;
      const info = await client.query(ClassDoctorModel.updateDoctorByEmail, [
        id,
        licenceNumber,
        identification_number,
        name,
        lastName,
        phoneNumber,
        active,
        licencePhoto,
        profilePicture,
        birthDate,
        biography,
        specialty_id
      ]);
      console.log(info)
      return res.status(200).json({
        id,
        licenceNumber,
        identification_number,
        name,
        lastName,
        phoneNumber,
        active,
        licencePhoto,
        profilePicture,
        birthDate,
        biography,
        specialty_id
      });
    } catch (err) {
      console.error("Error actualizando usuario:", err);
      return res.status(500).json({ message: "Error actualizando usuario" });
    }
  }
}

const ClassDoctorsController = new DoctorsController();

export { ClassDoctorsController };