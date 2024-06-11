import { client } from '../db.js'
import { ClassMedicalRecordModel } from '../models/medicalRecord.model.js'
import { validatePostMedicalRecord} from '../utils/validators/medicalRercordValidator.js'





class MedicalRecordsController {
    /**
   * Funcion encargada de obtener todos los usuarios
   *
   * @param {{}} req - Se refiere a los parametros que vienen dentro de la request
   * @param {{}} res - Se refiere a la response que envia el servidor
   * @returns {Promise} 
   */
  async get (req, res) {
   try{
    const response = await client.query(ClassMedicalRecordModel.getAllMedicalRecords)
    console.log(response)
      return res.status(200).json(response.rows) 

   }catch (err) {
    return res.status(500).json({ err: err.message })
   }

}

async post (req, res) {
    const result = validatePostMedicalRecord(req.body)

    if (result.error) {
      return res.status(500).json(result.error.issues)
    }
    console.log(result)

    const {
        date,
        doctor_id,
        consultant_reason,
        recomendations,
        diagnosis,
        users_id
    } = result.data

    try {
      await client.query(
        ClassMedicalRecordModel.postMedicalRecord, [
            date,
            doctor_id,
            consultation_reason,
            recomendations,
            diagnosis,
            users_id
        ])

      return res.status(200).json(result.data)
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  }
  async put(req, res) {
    const result = validatePostMedicalRecord(req.body);
    console.log(result)

    if (result.error) {
      return res.status(400).json(result.error.issues);
   }

    try {
   
   
          const {
                  id,
                  date,
                  doctor_id,
                  consultation_reason,
                  recomendations,
                  diagnosis,
                  users_id
                } = result.data;
          await client.query(
            ClassMedicalRecordModel.updateMedicalRecord,
            [
              id,
              date,
              doctor_id,
              consultation_reason,
              recomendations,
              diagnosis,
              users_id
            ]
            
          );
          return res.status(200).json({
            
            id,
            doctor_id,
            date,
            consultation_reason,
            recomendations,
            diagnosis,
            users_id
          });
              


   
  } catch (err) {
    console.error('Error actualizando medical record:', err);
    return res.status(500).json({ message: 'Error actualizando medical record' });
  }
  }
}

const ClassMedicalRecordsController = new MedicalRecordsController()

export { ClassMedicalRecordsController }